import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.u212w7ngo {
  d: path("m14 15.5l1.75 1.75l-2.25.5Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.z5y3_scgh {
  d: path("M3 12a9 9 0 1 0 18 0a9 9 0 1 0-18 0Zm6.5-4.5v9m0-6l6-3.5m-6 6.5l6 3.5");
}
</style><g class="ulnmmdpxh"><path class="z5y3_scgh"/><path class="u212w7ngo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:transistor"} {...others} />);
}

export default Component;
