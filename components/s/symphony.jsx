import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.vba_d8b3d {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M42.5 21.697v4.74m-7.4-13.374v21.678M27.7 5.664v32.092m-7.4-27.512v32.092M12.9 14.41v19.044M5.5 19.65v8.928");
}
</style><path class="vba_d8b3d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:symphony"} {...others} />);
}

export default Component;
