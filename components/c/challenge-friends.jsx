import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hbqs64bfv {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.75 7.5a3 3 0 1 0 6 0a3 3 0 1 0-6 0Zm-2.25 13c0-3.75 2.5-6 5.25-6s5.25 2.25 5.25 6m1-15a2.75 2.75 0 1 0 5.5 0a2.75 2.75 0 1 0-5.5 0ZM12.75 12c1-.75 2.5-1 4-1c2.5 0 4.25.75 4.5 2M16 21.5v-5.75h5.5l-1.5 2l1.5 2H16");
}
</style><path class="hbqs64bfv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:challenge-friends"} {...others} />);
}

export default Component;
