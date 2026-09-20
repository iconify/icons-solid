import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hgcl4nbkr {
  fill: currentColor;
  d: path("M2 17V7h17.885v10zm12-1h4.885V8H14zm6.885-1.884V9.904H22v4.212z");
}
</style><path class="hgcl4nbkr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:battery-android-5-outline-sharp"} {...others} />);
}

export default Component;
