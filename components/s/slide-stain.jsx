import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.do75o1b8i {
  d: path("M4 6.5h16L21.5 8v8L20 17.5H4L2.5 16V8Zm2.5 0v11");
}

.lrj_dgb9g {
  d: path("M13 9.25c1 1.25 2 2.25 2 3.5a2 2 0 0 1-4 0c0-1.25 1-2.25 2-3.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="do75o1b8i"/><path class="lrj_dgb9g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:slide-stain"} {...others} />);
}

export default Component;
