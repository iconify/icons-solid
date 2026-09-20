import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.eircgdc5a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m14.878 6.5l-.662 2.47a3.07 3.07 0 0 0 2.965 3.863h19.122a5.865 5.865 0 0 0 5.665-4.346L42.5 6.5zM10.32 23.513L5.5 41.5h9.208l4.287-16H33.41a5.21 5.21 0 0 0 5.035-3.864l.662-2.47H15.985a5.865 5.865 0 0 0-5.665 4.348");
}
</style><path class="eircgdc5a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:fast-memo"} {...others} />);
}

export default Component;
