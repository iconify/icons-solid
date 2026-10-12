import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d-uz2lspu {
  d: path("M7.34 20.14A18 18 0 0 0 21 18.34");
}

.do29zw4qy {
  cx: 17.49px;
  cy: 14.53px;
  r: 2.5px;
}

.onhg5sb4f {
  d: path("M8.25 2.75h7.5m-3.75 0l4.44 9.52");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="onhg5sb4f"/><circle class="do29zw4qy"/><path class="d-uz2lspu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:pendulum-sharp"} {...others} />);
}

export default Component;
