import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.eqnfoi84c {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.69 6.059H42.5v35.883H23.69zm-11.299 5.587H23.69v24.708H12.391zM5.5 16.55h6.891v14.899H5.5z");
}
</style><path class="eqnfoi84c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:bbc-sounds"} {...others} />);
}

export default Component;
