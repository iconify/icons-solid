import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dlxz3wbik {
  d: path("M9 12c1-1 2 1 3 0s2 1 3 0");
}

.fha6990wp {
  d: path("M2.75 4.75h18.5v14.5H2.75z");
}

.my26b-bsa {
  d: path("M5.75 8.25h12.5v7.5H5.75z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="fha6990wp"/><path class="my26b-bsa"/><path class="dlxz3wbik"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:scratch-card-sharp"} {...others} />);
}

export default Component;
