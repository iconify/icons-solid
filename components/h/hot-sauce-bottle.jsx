import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.iza2qcceq {
  d: path("m10.5 17.5l1.5-2l1.5 2");
}

.ru9kuyb2i {
  d: path("M10 3.5h4V8c0 1 2.5 1.5 2.5 4v7a2 2 0 0 1-2 2h-5a2 2 0 0 1-2-2v-7c0-2.5 2.5-3 2.5-4ZM8 14h8");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="ru9kuyb2i"/><path class="iza2qcceq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:hot-sauce-bottle"} {...others} />);
}

export default Component;
