import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.z9ptonj_o {
  fill: none;
  stroke: currentColor;
  stroke-dashoffset: 3;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M41.896 20.99L9.622 40.69c-2.063 1.26-4.342-.957-3.236-3.236L20.855 7.648c.894-1.841 3.035-1.411 3.72 0l16.487 33.928");
}
</style><path class="z9ptonj_o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:airtm"} {...others} />);
}

export default Component;
