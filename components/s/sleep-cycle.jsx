import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dx1pr0bgp {
  d: path("M21 6h-3v3m-4-.5a4.5 4.5 0 1 0 1.5 6.5A3.75 3.75 0 0 1 14 8.5Z");
}

.su75vcb-l {
  d: path("M12 3.5A8.5 8.5 0 1 0 18 6");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="su75vcb-l"/><path class="dx1pr0bgp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:sleep-cycle"} {...others} />);
}

export default Component;
