import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gdayiybsd {
  d: path("M15.75 10.25h5.5v11h-5.5zm2 8.25h1.5");
}

.le1-fccpz {
  d: path("M5.75 3.75h14v3.5h-7v7.5h-9v-11zm-3 14.5h9.75");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="le1-fccpz"/><path class="gdayiybsd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:laptop-and-phone-sharp"} {...others} />);
}

export default Component;
