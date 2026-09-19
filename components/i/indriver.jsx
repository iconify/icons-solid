import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.vslr47eqd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M5.5 5.5h8.954v8.954H5.5zm0 16.777h8.954v20.076H5.5zM24 33.399a9.472 9.472 0 0 0 0-18.945V5.5a18.5 18.5 0 0 1 0 37Z");
}
</style><path class="vslr47eqd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:indriver"} {...others} />);
}

export default Component;
