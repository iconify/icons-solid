import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.anr41ub1a {
  d: path("M10 15.25v4.25a2 2 0 0 0 4 0v-4.25M12 6h.01M9 9.5h.01m5.99 0h.01m-3.01 3h.01");
}

.ulnmmdpxh {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
}

.w42wg4f9q {
  d: path("M5 9a7 6.5 0 1 0 14 0A7 6.5 0 1 0 5 9Z");
}
</style><g class="ulnmmdpxh"><path class="w42wg4f9q"/><path class="anr41ub1a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:scalp-massager"} {...others} />);
}

export default Component;
