import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jks-j8nup {
  d: path("M20 12a8 8 0 1 1-2.25-5.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.zpb_sxbkz {
  d: path("M17.75 2.5v3.75H14");
}
</style><g class="ulnmmdpxh"><path class="jks-j8nup"/><path class="zpb_sxbkz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:test-retry"} {...others} />);
}

export default Component;
