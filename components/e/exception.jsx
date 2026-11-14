import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.our1xplis {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m2.727 17.384l5.657-5.657l3.889 3.889l-5.657 5.657Zm12.465-5.535l-3.465-3.465l5.657-5.657l3.889 3.889l-5.091 5.091M8 8l2.25 2.25M18 14.5V18m0 3h.01");
}
</style><path class="our1xplis"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:exception"} {...others} />);
}

export default Component;
