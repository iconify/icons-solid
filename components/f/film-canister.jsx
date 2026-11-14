import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.b6-r3jblh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.5 6.5h8v13A1.5 1.5 0 0 1 10 21H5a1.5 1.5 0 0 1-1.5-1.5Zm-.75-3h9.5v3h-9.5Zm8.75 7h10V16h-10m3.5-2.75h.01m3.49 0h.01");
}
</style><path class="b6-r3jblh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:film-canister"} {...others} />);
}

export default Component;
