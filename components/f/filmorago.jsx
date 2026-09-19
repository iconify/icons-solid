import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.dm_99491l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m33.78 14.26l9.74 9.762L24 43.5l-9.74-9.761z");
}

.gdwmkibqt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m21.359 26.656l-.26-5.584l-6.818-6.833L24.042 4.5l9.739 9.761z");
}
</style><path class="dm_99491l"/><path class="gdwmkibqt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:filmorago"} {...others} />);
}

export default Component;
