import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mx05vpbqt {
  d: path("M16.25 21.25a2.5 2.5 0 0 1 5 0Z");
}

.popkm6nke {
  d: path("M2.75 2.75h10.5v18.5H2.75zM6 7h4.5M6 10.25h3");
}

.ugj79i4_e {
  cx: 18.75px;
  cy: 15px;
  r: 1.75px;
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="popkm6nke"/><circle class="ugj79i4_e"/><path class="mx05vpbqt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:power-of-attorney-sharp"} {...others} />);
}

export default Component;
