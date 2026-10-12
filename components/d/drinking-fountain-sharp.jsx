import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.itxcm0bbl {
  d: path("M2.75 2.75h18.5v18.5H2.75z");
}

.rqdx1qeps {
  d: path("M6 7.5h8.5v3M9.25 5.75V7.5m.5 5.5h5.5l-.75 5h-4Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="itxcm0bbl"/><path class="rqdx1qeps"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:drinking-fountain-sharp"} {...others} />);
}

export default Component;
