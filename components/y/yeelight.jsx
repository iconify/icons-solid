import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.ulz77ubti {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M15.703 30.995L4.5 26.62V13.764L24 21.38v12.856m8.297-3.241L43.5 26.62V13.764L24 21.38v12.856");
}
</style><path class="ulz77ubti"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:yeelight"} {...others} />);
}

export default Component;
