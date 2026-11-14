import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.q9s923-0m {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 10.5V13L4 21.5h16L14.5 13v-2.5m-4.5-4a2 2 0 1 0 4 0a2 2 0 1 0-4 0ZM15.5 3h.01M8 3.5h.01m-.76 13h9.5");
}
</style><path class="q9s923-0m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:mad-science"} {...others} />);
}

export default Component;
