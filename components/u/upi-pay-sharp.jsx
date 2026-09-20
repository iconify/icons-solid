import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b15ay9bdc {
  fill: currentColor;
  d: path("M11.5 14.692h.885v-2.076h3.5V9.308H11.5zm5.77 0h.884V9.308h-.885zm-4.885-2.961v-1.539H15v1.539zM5.73 14.692h4.385V9.308H9.23v4.5H6.616v-4.5H5.73zM3 19V5h18v14z");
}
</style><path class="b15ay9bdc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:upi-pay-sharp"} {...others} />);
}

export default Component;
