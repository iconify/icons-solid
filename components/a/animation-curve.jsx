import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ebp6eqbss {
  fill: currentColor;
  fill-rule: evenodd;
  d: path("M20.53 3.97q.634.634.634 1.53q0 .897-.634 1.53q-.633.634-1.53.634t-1.53-.634q-.35-.35-.507-.78q-2.196.05-4.254 5.995q-2.411 6.965-5.672 7.005q-.156.43-.507.78q-.633.634-1.53.634t-1.53-.634q-.634-.633-.634-1.53t.634-1.53q.633-.634 1.53-.634q.896 0 1.53.634q.35.35.507.78q2.196-.05 4.254-5.995q2.411-6.965 5.672-7.005q.156-.43.507-.78q.633-.634 1.53-.634q.896 0 1.53.634");
}
</style><path class="ebp6eqbss"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-solid:animation-curve"} {...others} />);
}

export default Component;
