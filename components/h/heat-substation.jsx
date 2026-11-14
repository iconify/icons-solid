import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.blacghb1l {
  d: path("M5.125 5h8.75A2.625 2.625 0 0 1 16.5 7.625v11.25a2.625 2.625 0 0 1-2.625 2.625h-8.75A2.625 2.625 0 0 1 2.5 18.875V7.625A2.625 2.625 0 0 1 5.125 5M16.5 8.5h2.25a2.75 2.75 0 0 0 2.75-2.75V3m-5 12.5h2.25a2.75 2.75 0 0 1 2.75 2.75V21");
}

.d9ozjxbql {
  d: path("M9.5 13.25C8 11.5 8 9.5 9.5 8.25c1.5 1.25 1.5 3.25 0 5m0 0c2.25-.5 4 .5 4.25 2.5c-1.75.75-3.5-.25-4.25-2.5m0 0c-.75 2.25-2.5 3.25-4.25 2.5c.25-2 2-3 4.25-2.5");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="hntgybcog"><path class="blacghb1l"/><path class="d9ozjxbql"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:heat-substation"} {...others} />);
}

export default Component;
