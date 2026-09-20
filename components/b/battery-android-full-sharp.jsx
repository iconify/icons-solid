import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ynxbl1b6d {
  fill: currentColor;
  d: path("M2 17V7h17.885v10zm18.885-2.884V9.904H22v4.212z");
}
</style><path class="ynxbl1b6d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:battery-android-full-sharp"} {...others} />);
}

export default Component;
