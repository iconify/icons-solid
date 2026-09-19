import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.b1lcxqbqr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M9.42 35.89a16.81 16.81 0 0 1 23.77-23.78L21.31 24l11.88 11.89a16.82 16.82 0 0 1-23.77 0m29.15 0L26.69 24l11.88-11.89a16.8 16.8 0 0 1 0 23.78m0 0");
}
</style><path class="b1lcxqbqr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:freemobilenetstat"} {...others} />);
}

export default Component;
