import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o1cy2tblq {
  cx: 12px;
  cy: 15.5px;
  r: 2.75px;
}

.qlu4-7b0e {
  d: path("M6.38 8.8a8.75 8.75 0 0 1 11.24 0M4.45 6.5a11.75 11.75 0 0 1 15.1 0");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.ydy0opbpr {
  cx: 12px;
  cy: 15.5px;
  r: 5.75px;
}
</style><g class="x2cwu0gfd"><circle class="ydy0opbpr"/><circle class="o1cy2tblq"/><path class="qlu4-7b0e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:smart-button-sharp"} {...others} />);
}

export default Component;
