import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.it4pn1hlk {
  d: path("M5.25 6.75h3.5v14.5h-3.5zm10 0h3.5v14.5h-3.5zm-4.5 5L9.5 13.5l1.25 1.75m2.5-3.5l1.25 1.75l-1.25 1.75m-2.75-10h3");
}

.mh6m3mtvi {
  d: path("M2.75 21.25V2.75h18.5v18.5");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="mh6m3mtvi"/><path class="it4pn1hlk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:automatic-door-sharp"} {...others} />);
}

export default Component;
