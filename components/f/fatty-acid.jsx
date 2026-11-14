import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ou1o1l1de {
  d: path("m2.5 18l4-5l4 5l4-5V6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xpx6t6byj {
  d: path("M14 4.75a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm3.25 13a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm0-6.25V6.25M14.5 13l3.25 3.25");
}
</style><g class="ulnmmdpxh"><path class="ou1o1l1de"/><path class="xpx6t6byj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:fatty-acid"} {...others} />);
}

export default Component;
