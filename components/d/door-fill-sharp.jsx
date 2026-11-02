import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qygeugb9o {
  fill: currentColor;
  d: path("M5 20V3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v17h2a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2Zm9.01-9H14a1 1 0 0 0 0 2h.01a1 1 0 0 0 0-2");
}
</style><path class="qygeugb9o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:door-fill-sharp"} {...others} />);
}

export default Component;
