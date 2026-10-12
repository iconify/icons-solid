import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.la1uxcbjt {
  d: path("M4.52 8.51a8.25 8.25 0 1 1 .08 6.99m-.85-11v4.25H8");
}

.nsfej940a {
  d: path("M8.75 11.25h6.5v5h-6.5zm1.5 0v-3h3.5v3");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="la1uxcbjt"/><path class="nsfej940a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:lock-reset-sharp"} {...others} />);
}

export default Component;
