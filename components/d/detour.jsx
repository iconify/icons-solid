import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.amtnqlo8r {
  fill: currentColor;
  d: path("M12 10za1.75 1.75 0 0 1 1.75 1.75A1.75 1.75 0 0 1 12 13.5a1.75 1.75 0 0 1-1.75-1.75A1.75 1.75 0 0 1 12 10");
}

.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xg0cf7bzy {
  d: path("m19.25 14l2.5 2.5l-2.5 2.5");
}

.xikjqib6u {
  d: path("M2.5 16.5h5v-9A2.5 2.5 0 0 1 10 5h4a2.5 2.5 0 0 1 2.5 2.5v9h5.25");
}
</style><g class="hntgybcog"><path class="xikjqib6u"/><path class="xg0cf7bzy"/><path class="amtnqlo8r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:detour"} {...others} />);
}

export default Component;
