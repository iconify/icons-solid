import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qrwtisbbl {
  fill: currentColor;
  d: path("M5 16.77v-13h17v13zm8.5-5.283L6 5.943v9.825h15V5.944zm0-1.176L21 4.77H6zM2 19.77V8.654h1v10.115h15.385v1zm19-15H6z");
}
</style><path class="qrwtisbbl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:stacked-email-outline-sharp"} {...others} />);
}

export default Component;
