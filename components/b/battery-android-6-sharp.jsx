import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.n97e2fn-c {
  fill: currentColor;
  d: path("M2 17V7h17.885v10zm14-1h2.885V8H16zm4.885-1.884V9.904H22v4.212z");
}
</style><path class="n97e2fn-c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:battery-android-6-sharp"} {...others} />);
}

export default Component;
