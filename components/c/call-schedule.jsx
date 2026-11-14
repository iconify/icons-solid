import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ln3modbcl {
  d: path("M15.5 15h1.75l1 2.25l-1.25 1l2.25 2.25l1-1.25L22 20v1.75A6.75 6.75 0 0 1 15.5 15Z");
}

.q0bq-nboz {
  d: path("M14.4 20.5H3V4h17v10.4M8 2.5v3m7-3v3M3 9h17");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="q0bq-nboz"/><path class="ln3modbcl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:call-schedule"} {...others} />);
}

export default Component;
