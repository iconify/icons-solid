import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ur2_lsbxe {
  d: path("M16.5 10V4h4.75m-18.5 6h18.5L20 19.5l-.222 1.764L18 21.25H6l-1.778.014L4 19.5Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yf331je7x {
  d: path("m5 13.5l1.944-1.556L8.5 13.5l1.556 1.556L12 13.5l1.75-1.4l1.75 1.4l1.75 1.4L19 13.5");
}
</style><g class="x2cwu0gfd"><path class="ur2_lsbxe"/><path class="yf331je7x"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:water-trough-sharp"} {...others} />);
}

export default Component;
