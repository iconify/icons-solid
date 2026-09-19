import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.al2mlrb0r {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 4.5v39m-4.988-28.57v18.14m9.976-18.14v18.14M14.023 19.692v8.616m19.954-8.616v8.616M9.035 21.733v4.535m29.93-4.535v4.535");
}
</style><path class="al2mlrb0r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:soundbrenner"} {...others} />);
}

export default Component;
