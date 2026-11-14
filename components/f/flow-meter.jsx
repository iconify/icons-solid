import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g030okbxp {
  d: path("M6.5 6h11v12h-11Zm-4 3h4m-4 6h4m11-6h4m-4 6h4M9 12h6");
}

.ggd9ol9zz {
  d: path("M13.25 10.25L15 12l-1.75 1.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="g030okbxp"/><path class="ggd9ol9zz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:flow-meter"} {...others} />);
}

export default Component;
