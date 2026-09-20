import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ko0bhzb1j {
  fill: currentColor;
  d: path("M2 17V7h17.885v10zm10-1h6.885V8H12zm8.885-1.884V9.904H22v4.212z");
}
</style><path class="ko0bhzb1j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:battery-android-4-sharp"} {...others} />);
}

export default Component;
