import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.oij1-7y-i {
  d: path("m7.5 6l-2 3.5H8l-1.5 3m7 9L16.75 3m4.75 18.5L19.75 3M17.5 20.5l.25-4m0-3L18 10");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.x4sk_eb3q {
  d: path("M2.5 3h8v18.5h-8Z");
}
</style><g class="ulnmmdpxh"><path class="x4sk_eb3q"/><path class="oij1-7y-i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:charger-highway"} {...others} />);
}

export default Component;
