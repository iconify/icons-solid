import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.boq3-fvup {
  fill: currentColor;
  d: path("m5.808 20.27l-2.77-2.758l.72-.708l1.55 1.55V4.462h1v13.892l1.55-1.55l.708.708zm4.346-3.94v-1.014l2.838-1.028V9.647l-2.838-1.038V7.592L20.462 11.5v1zm3.708-2.372l5.28-1.908v-.1l-5.28-1.984z");
}
</style><path class="boq3-fvup"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:text-rotation-down-sharp"} {...others} />);
}

export default Component;
