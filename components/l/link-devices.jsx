import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m-xwcubbz {
  d: path("M12.9 16.5H2.5V3h17v6.9M11 16.5v1.9m-1.5.6h.9m3.095.884l3.889-3.889l2.121 2.121l-3.889 3.889Z");
}

.qxnp8rihd {
  d: path("m15.995 17.384l3.889-3.889l2.121 2.121l-3.889 3.889Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="m-xwcubbz"/><path class="qxnp8rihd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:link-devices"} {...others} />);
}

export default Component;
