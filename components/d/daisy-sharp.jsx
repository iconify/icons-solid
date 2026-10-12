import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gp0egaclj {
  cx: 12px;
  cy: 12px;
  r: 3px;
}

.le-8dcpwo {
  d: path("M9.85 3.97a2.5 2.5 0 0 1 4.3 0a2.5 2.5 0 0 1 3.72 2.16a2.5 2.5 0 0 1 2.16 3.72a2.5 2.5 0 0 1 0 4.3a2.5 2.5 0 0 1-2.16 3.72a2.5 2.5 0 0 1-3.72 2.16a2.5 2.5 0 0 1-4.3 0a2.5 2.5 0 0 1-3.72-2.16a2.5 2.5 0 0 1-2.16-3.72a2.5 2.5 0 0 1 0-4.3a2.5 2.5 0 0 1 2.16-3.72a2.5 2.5 0 0 1 3.72-2.16Z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="le-8dcpwo"/><circle class="gp0egaclj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:daisy-sharp"} {...others} />);
}

export default Component;
