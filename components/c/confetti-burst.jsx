import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.gc-7a3bif {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.75 8.75L5 5m10.25 3.75L19 5M8.75 15.25L5 19m10.25-3.75L19 19M12 3.5h.01m-.01 17h.01M3.5 12h.01m16.99 0h.01");
}
</style><path class="gc-7a3bif"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:confetti-burst"} {...others} />);
}

export default Component;
