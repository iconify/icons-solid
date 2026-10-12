import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.lgaeyobtl {
  d: path("M12 2.75v3m0 11.5v4M7.75 5.75h8.5v11.5h-8.5z");
}

.oah4cxijy {
  d: path("m12 7.75l1.5 2v.7a1.5 1.5 0 0 1-3 0v-.7zM7.75 14.5h8.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="lgaeyobtl"/><path class="oah4cxijy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:drip-chamber-sharp"} {...others} />);
}

export default Component;
