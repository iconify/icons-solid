import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.dn8h_tbmu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M13.736 19.028a10.736 10.736 0 1 1 0 7.344");
}

.u0ybeybzg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M4.5 12.263h9.915m18.563 0H43.5m-6.073 10.301h5.988M4.577 36.037V22.564h13.302m11.076 9.566h14.287");
}
</style><path class="u0ybeybzg"/><path class="dn8h_tbmu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:free-quran-education"} {...others} />);
}

export default Component;
