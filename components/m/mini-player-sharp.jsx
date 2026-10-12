import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.i0gym9b7a {
  d: path("m15.26 14.06l2.23 1.38l.51.31l-.51.31l-2.23 1.38l-.51.31v-4z");
}

.mnepmhb3d {
  d: path("m3.75 3.75l5 5m0-4v4h-4m6.5 2.5h10v9h-10z");
}

.x2cwu0gfd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}
</style><g class="x2cwu0gfd"><path class="mnepmhb3d"/><path class="i0gym9b7a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:mini-player-sharp"} {...others} />);
}

export default Component;
