import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ta73_99xr {
  fill: currentColor;
  d: path("M2 20V8q0-1.65 1.175-2.825T6 4h12q1.65 0 2.825 1.175T22 8v12zm2-2h16V8q0-.825-.587-1.412T18 6H6q-.825 0-1.412.588T4 8zm0 0h16zm6.575-2.475h4.35v-1.3H11.95V8.5h-1.375z");
}
</style><path class="ta73_99xr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:game-button-l-outline"} {...others} />);
}

export default Component;
