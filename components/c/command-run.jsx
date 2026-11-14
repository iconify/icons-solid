import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b63z2wbob {
  d: path("M11.7 21.5H4.5v-19h15v11.1");
}

.mbamhgyjh {
  d: path("m8 6l2.5 2.5L8 11m6.8 0H16m-1.5 3l7 4l-7 4Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="b63z2wbob"/><path class="mbamhgyjh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:command-run"} {...others} />);
}

export default Component;
