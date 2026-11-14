import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fx9g0t2jw {
  d: path("M5.5 6.5h5v3h-5Zm8 0h5v3h-5Zm-8 5h5v3h-5Zm8 0h5v3h-5Zm-8 5h5v3h-5Zm8 0h5v3h-5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w7mc2oblu {
  d: path("M3 4h18v16H3Z");
}
</style><g class="ulnmmdpxh"><path class="w7mc2oblu"/><path class="fx9g0t2jw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:safe-deposit-box"} {...others} />);
}

export default Component;
