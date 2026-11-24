import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dmxe-vbfo {
  fill: currentColor;
  d: path("M5.179 13.161a15.05 15.05 0 0 1 7.982-7.982A14.8 14.8 0 0 1 19 4a1 1 0 0 1 0 2a12.9 12.9 0 0 0-5.06 1.021a12.9 12.9 0 0 0-4.132 2.787a12.9 12.9 0 0 0-2.787 4.132A12.9 12.9 0 0 0 6 19a1 1 0 0 1-2 0a14.8 14.8 0 0 1 1.179-5.839");
}
</style><path class="dmxe-vbfo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:corner-round-fill"} {...others} />);
}

export default Component;
