import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.da9n995-z {
  d: path("M7 13a3.25 3.25 0 0 1-.6-6.45a4 4 0 0 1 5.6-2.3a4 4 0 0 1 5.6 2.3A3.25 3.25 0 0 1 17 13Z");
}

.luff-85my {
  d: path("M10.25 13h3.5l.6 7.15l.111 1.106l-1.111-.006h-2.7l-1.111.006l.111-1.106Zm-.75-2.75l.452-2.081L12 8.75");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="da9n995-z"/><path class="luff-85my"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:broccoli-sharp"} {...others} />);
}

export default Component;
