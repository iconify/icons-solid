import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pnt6oifjy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 19.5v-15l9.5 15v-15m4.75 2a2.25 2.25 0 1 1 0 4.5a2.25 2.25 0 1 1 0-4.5m-2.25 8h4.5");
}
</style><path class="pnt6oifjy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:numero-sign-sharp"} {...others} />);
}

export default Component;
