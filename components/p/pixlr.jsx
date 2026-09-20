import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.c1opy9-0a {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24 2.5A21.5 21.5 0 1 1 2.5 24A21.51 21.51 0 0 1 24 2.5m0 7.09A14.41 14.41 0 0 0 9.59 24A14.41 14.41 0 0 0 24 38.41A14.41 14.41 0 0 0 38.41 24A14.41 14.41 0 0 0 24 9.59m0 7.59l5.91 3.41v6.82L24 30.82l-5.91-3.41v-6.82Z");
}
</style><path class="c1opy9-0a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:pixlr"} {...others} />);
}

export default Component;
