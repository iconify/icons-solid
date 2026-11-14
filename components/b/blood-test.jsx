import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bi_con2tg {
  d: path("M14 8.25h2.5m-8.5 6h8.5M8 17.75h5.5");
}

.eoz3zibrm {
  d: path("M4.5 2.5h15v19h-15Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.woipuqb8s {
  fill: currentColor;
  d: path("M9.25 5.25C10.75 7 11.5 8 11.5 9c0 1.25-1 2.25-2.25 2.25S7 10.25 7 9c0-1 .75-2 2.25-3.75Z");
}
</style><g class="ulnmmdpxh"><path class="eoz3zibrm"/><path class="woipuqb8s"/><path class="bi_con2tg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:blood-test"} {...others} />);
}

export default Component;
