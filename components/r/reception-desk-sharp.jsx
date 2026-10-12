import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g828vzbqg {
  cx: 12px;
  cy: 5px;
  r: 2.25px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.yowu4vb0n {
  d: path("M6.75 13.25c.4-1.9 2.5-3 5.25-3s4.85 1.1 5.25 3Zm-4 0h18.5v8H2.75zm0 3h18.5");
}
</style><g class="x2cwu0gfd"><circle class="g828vzbqg"/><path class="yowu4vb0n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:reception-desk-sharp"} {...others} />);
}

export default Component;
