import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jbhroybrw {
  d: path("M6.5 16.5L10 12l3.5 2.5l4-5.5");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zq9l6cc4l {
  d: path("M2.5 3h19v18h-19Zm4 4H10");
}
</style><g class="ulnmmdpxh"><path class="zq9l6cc4l"/><path class="jbhroybrw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:dashboard-panel"} {...others} />);
}

export default Component;
