import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mq-yv8hbf {
  d: path("m4.75 8l3.5 1.5v7l-1.75-2l-1.75 2Zm5.5 2h3.5v7.5l-1.75-2l-1.75 2Zm5.5-.5l3.5-1.5v8.5l-1.75-2l-1.75 2Z");
}

.nr_b4cbgv {
  d: path("M2.5 7q9.5 6 19 0");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="nr_b4cbgv"/><path class="mq-yv8hbf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:bunting"} {...others} />);
}

export default Component;
