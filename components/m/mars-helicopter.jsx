import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kniycz3wx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 3h19m-19 3h19M12 3v6m-1.875 0h3.75a2.625 2.625 0 0 1 2.625 2.625v.75A2.625 2.625 0 0 1 13.875 15h-3.75A2.625 2.625 0 0 1 7.5 12.375v-.75A2.625 2.625 0 0 1 10.125 9M9.5 15L5 21m9.5-6l4.5 6M2.5 21h19");
}
</style><path class="kniycz3wx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:mars-helicopter"} {...others} />);
}

export default Component;
