import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wdz_-bngq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.454 15.889L15.889 2.454l5.657 5.657L8.111 21.546Zm2.828-2.828l2.122 2.121m.353-4.596l3.182 3.182m-.707-5.657l2.122 2.121m.353-4.596l3.182 3.182");
}
</style><path class="wdz_-bngq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:ruler"} {...others} />);
}

export default Component;
