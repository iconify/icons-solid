import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.s0k-y6cir {
  fill: currentColor;
  d: path("M3 19V4.98h18V19zm2.77-2.73h8.403L9.827 7.711H5.769zm7.5-7.097h4.96V7.711h-4.96z");
}
</style><path class="s0k-y6cir"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:payment-card-sharp"} {...others} />);
}

export default Component;
