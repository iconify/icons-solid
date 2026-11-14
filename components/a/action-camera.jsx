import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c8fp0s1gc {
  d: path("M3 6h18v13H3Z");
}

.rf_uw0bze {
  d: path("M6 12.5a3.5 3.5 0 1 0 7 0a3.5 3.5 0 1 0-7 0Zm9-3h3.5v3H15Zm.5-6h3");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="c8fp0s1gc"/><path class="rf_uw0bze"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:action-camera"} {...others} />);
}

export default Component;
