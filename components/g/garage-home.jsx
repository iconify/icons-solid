import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hrydsb2py {
  fill: currentColor;
  d: path("M4 21V9l8-6l8 6v12h-3V11H7v10zm5-2h6v-2H9zm0-4h6v-2H9z");
}
</style><path class="hrydsb2py"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:garage-home"} {...others} />);
}

export default Component;
