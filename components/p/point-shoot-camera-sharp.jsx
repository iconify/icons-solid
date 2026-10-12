import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qkx8wob1u {
  d: path("M2.75 7.25h18.5v12.5H2.75zm2.25-3h4v3H5z");
}

.w4wqpfbkp {
  cx: 14.75px;
  cy: 13.5px;
  r: 3.5px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.xqntkvdws {
  d: path("M5.75 10.5h2.5");
}
</style><g class="x2cwu0gfd"><path class="qkx8wob1u"/><circle class="w4wqpfbkp"/><path class="xqntkvdws"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:point-shoot-camera-sharp"} {...others} />);
}

export default Component;
