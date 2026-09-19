import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.uo_6-jb1f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m20.113 27.568l3.05 13.099l.837-.556V24H5.5l.208.541zM24 24l-3.887 3.568m7.774-7.136l-3.05-13.099l-.837.556V24h18.5l-.208-.541zM24 24l3.887-3.568");
}
</style><path class="uo_6-jb1f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:polestar"} {...others} />);
}

export default Component;
