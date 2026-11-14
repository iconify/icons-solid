import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.db-pyo7hp {
  d: path("M11.25 3.75L13 5.5l-1.75 1.75");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w3410vtci {
  d: path("M2.5 15.5h5v5h-5Zm7-6h5v5h-5Zm7-6h5v5h-5ZM5 12.5q0-7 8-7");
}
</style><g class="ulnmmdpxh"><path class="w3410vtci"/><path class="db-pyo7hp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:kata-form"} {...others} />);
}

export default Component;
