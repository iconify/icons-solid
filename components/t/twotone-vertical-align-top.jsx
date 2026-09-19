import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i2y-9b59z {
  fill: currentColor;
  d: path("M4 3h16v2H4zm4 8h3v10h2V11h3l-4-4z");
}
</style><path class="i2y-9b59z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-vertical-align-top"} {...others} />);
}

export default Component;
