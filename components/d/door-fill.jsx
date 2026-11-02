import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cjsov3rpn {
  fill: currentColor;
  d: path("M21 22H3a1 1 0 0 1 0-2h2V5a3 3 0 0 1 3-3h8a3 3 0 0 1 3 3v15h2a1 1 0 0 1 0 2m-6.99-11H14a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2");
}
</style><path class="cjsov3rpn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:door-fill"} {...others} />);
}

export default Component;
