import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.bi5bgee3o {
  d: path("M12 2.75a9.25 9.25 0 1 0 0 18.5a9.25 9.25 0 0 0 0-18.5Z");
}

.e-2-i017w {
  cx: 12px;
  cy: 12px;
  r: 2.75px;
}

.k2u08qglx {
  d: path("M2.75 12h6.5m5.5 0h6.5M12 14.75v6.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="bi5bgee3o"/><circle class="e-2-i017w"/><path class="k2u08qglx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:steering-wheel-sharp"} {...others} />);
}

export default Component;
