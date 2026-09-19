import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.e40phdcpi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  d: path("m19.568 4.5l-4.875 39m18.614-39l-4.875 39M9.818 31.09H36.41M11.59 16.023h26.592");
}
</style><path class="e40phdcpi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:hasheasily"} {...others} />);
}

export default Component;
