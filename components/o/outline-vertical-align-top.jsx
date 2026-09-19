import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ifrgh_bsa {
  fill: currentColor;
  d: path("M8 11h3v10h2V11h3l-4-4zM4 3v2h16V3z");
}
</style><path class="ifrgh_bsa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:outline-vertical-align-top"} {...others} />);
}

export default Component;
