import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.m9s6mlb5s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 15h12a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1h-12a1 1 0 0 1-1-1v-4a1 1 0 0 1 1-1Zm2 0v-4.5h8V15M6 10.5V5h4l1 5.5m8.5-.5h2v11h-2Zm-6 2.25h6");
}
</style><path class="m9s6mlb5s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:bulldozer"} {...others} />);
}

export default Component;
