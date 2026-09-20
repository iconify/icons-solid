import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.njj0_t8pt {
  fill: currentColor;
  d: path("M2 17V7h17.885v10zm8-1h8.885V8H10zm10.885-1.884V9.904H22v4.212z");
}
</style><path class="njj0_t8pt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:battery-android-3-sharp"} {...others} />);
}

export default Component;
