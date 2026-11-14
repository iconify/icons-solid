import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dx1s0-bva {
  d: path("M16.5 16a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm-8-7.5L11 11m2 2l2.5 2.5M15 8l2-2M6.5 18l2-2");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yy6n1qb4a {
  d: path("M3.5 8a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}

.zge__4byz {
  d: path("M6 5.5a2 2 0 1 0 4 0a2 2 0 1 0-4 0Zm8 13a2 2 0 1 0 4 0a2 2 0 1 0-4 0Z");
}
</style><g class="ulnmmdpxh"><path class="yy6n1qb4a"/><path class="zge__4byz"/><path class="dx1s0-bva"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:broken-bone"} {...others} />);
}

export default Component;
