import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.k4ivzvbgl {
  d: path("M2.5 7.5v14h19v-14m-19 9h19");
}

.mu556-0wk {
  d: path("M5.5 16.5v-4c0-1 1-1.5 1-2.25V9H8v1.25C8 11 9 11.5 9 12.5v4m2 0V11l1.75-2l1.75 2v5.5m4.25-7.75v4.5m-2-3.5l4 2.5m-4 0l4-2.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="k4ivzvbgl"/><path class="mu556-0wk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:dairy-case"} {...others} />);
}

export default Component;
