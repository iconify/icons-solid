import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.v4fxj5lot {
  d: path("M12.5 5.75a7 7 0 1 0 0 12.5M15.75 3c3.75 1.5 5.75 5 5.75 9s-2 7.5-5.75 9c-1.25-4-1.25-14 0-18ZM7.5 10.5h.01");
}

.z_gaqcbca {
  d: path("M6 14.5q2 1.5 4 0");
}
</style><g class="ulnmmdpxh"><path class="v4fxj5lot"/><path class="z_gaqcbca"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:impostor-syndrome"} {...others} />);
}

export default Component;
