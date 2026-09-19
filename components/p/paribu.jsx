import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.skcr2nqlu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M16.902 43.5v-39m-6.482 0h17.62c5.3 0 9.54 4.24 9.54 9.539s-4.24 9.539-9.54 9.539H10.42");
}
</style><path class="skcr2nqlu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:paribu"} {...others} />);
}

export default Component;
