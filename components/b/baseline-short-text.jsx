import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gnyzqsw2h {
  fill: currentColor;
  d: path("M4 9h16v2H4zm0 4h10v2H4z");
}
</style><path class="gnyzqsw2h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:baseline-short-text"} {...others} />);
}

export default Component;
