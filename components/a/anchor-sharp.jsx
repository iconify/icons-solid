import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ectlz40fc {
  d: path("M12 7.25V21M8.5 10.75h7M4.75 13.5C4.75 17.75 8 21 12 21s7.25-3.25 7.25-7.5m-16 1.5l1.5-1.5l1.5 1.5m11.5 0l1.5-1.5l1.5 1.5");
}

.g828vzbqg {
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
</style><g class="x2cwu0gfd"><circle class="g828vzbqg"/><path class="ectlz40fc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:anchor-sharp"} {...others} />);
}

export default Component;
