import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jkcqce51r {
  cx: 7.5px;
  cy: 7.5px;
  r: 4.25px;
}

.s-lpcnblg {
  cx: 16.5px;
  cy: 16.5px;
  r: 4.25px;
}

.tcjpi5bkv {
  d: path("M14.25 4.75h4.5v4.5m-2-1.75l2 2l2-2m-11 11.75h-4.5v-4.5m-2 1.75l2-2l2 2");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><circle class="jkcqce51r"/><circle class="s-lpcnblg"/><path class="tcjpi5bkv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:exchange-sharp"} {...others} />);
}

export default Component;
