import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h6wblvbmi {
  d: path("m6.75 9.75l.735 1.489l1.643.238l-1.189 1.159l.28 1.637L6.75 13.5l-1.469.773l.28-1.637l-1.189-1.159l1.643-.238ZM13 12h8.5");
}

.s9ryf6bri {
  d: path("M2.5 12a4.25 4.25 0 1 0 8.5 0a4.25 4.25 0 1 0-8.5 0ZM13 12a4.25 4.25 0 1 0 8.5 0a4.25 4.25 0 1 0-8.5 0Z");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="ulnmmdpxh"><path class="s9ryf6bri"/><path class="h6wblvbmi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:brand-vs-generic"} {...others} />);
}

export default Component;
