import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cu4tpzh0g {
  d: path("M2.5 2.5h15V7h-15ZM4 7v9.5q0 1 1 1h7.586M16 11.928V7");
}

.s7forcpna {
  d: path("m7 12l2.25 2.25l.411-.462m1.594-1.794L13.25 9.75m.75 5h7.25l-2.75 3.5v3l-1.75-1v-2Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="cu4tpzh0g"/><path class="s7forcpna"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:filter-availability"} {...others} />);
}

export default Component;
