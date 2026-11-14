import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hntgybcog {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.j4oixebzv {
  d: path("M21.5 8h-9v10.5");
}

.qfv5ojbmy {
  d: path("M13.75 14c.75-2.5 1.5-3 2-2.25s-.25 1.75.5 1.75c.5 0 .75-1 1.5-1.75M5.5 9.5h4m-4 5h3");
}

.sbx4fhbot {
  d: path("M4.5 5.5h15a2 2 0 0 1 2 2V8l-9 10.5h-8a2 2 0 0 1-2-2v-9a2 2 0 0 1 2-2");
}
</style><g class="hntgybcog"><path class="sbx4fhbot"/><path class="j4oixebzv"/><path class="qfv5ojbmy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:cheque-endorse"} {...others} />);
}

export default Component;
