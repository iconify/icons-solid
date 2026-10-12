import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kkc61bb7x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 3.25h16.5V14.5H3.75zm3.5 4h5m-5 3h3M6.5 17h12l.38.92l.99 2.41l.38.92H3.75l.38-.92l.99-2.41l.38-.92z");
}
</style><path class="kkc61bb7x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:smart-display-sharp"} {...others} />);
}

export default Component;
