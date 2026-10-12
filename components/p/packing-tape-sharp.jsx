import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lwx762bnj {
  d: path("M6 9.25a3.25 3.25 0 1 0 6.5 0a3.25 3.25 0 1 0-6.5 0m3.25 6.5h12L20 17.5l1.25 1.75h-12Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z0rxcxb0v {
  cx: 9.25px;
  cy: 9.25px;
  r: 6.5px;
}
</style><g class="x2cwu0gfd"><circle class="z0rxcxb0v"/><path class="lwx762bnj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:packing-tape-sharp"} {...others} />);
}

export default Component;
