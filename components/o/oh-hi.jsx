import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.d4q5ugrmy {
  fill: none;
  stroke: currentColor;
  stroke-linejoin: round;
  d: path("M7.5 5.5a1.996 1.996 0 0 0-2 2v13a1.996 1.996 0 0 0 2 2h13a1.996 1.996 0 0 0 2-2v-13a1.996 1.996 0 0 0-2-2Zm20 0a1.996 1.996 0 0 0-2 2v13a1.996 1.996 0 0 0 2 2h13a1.996 1.996 0 0 0 2-2v-13a1.996 1.996 0 0 0-2-2Zm-20 20a1.996 1.996 0 0 0-2 2v13a1.996 1.996 0 0 0 2 2h13a1.996 1.996 0 0 0 2-2v-13a1.996 1.996 0 0 0-2-2Z");
}
</style><path class="d4q5ugrmy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:oh-hi"} {...others} />);
}

export default Component;
