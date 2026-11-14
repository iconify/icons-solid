import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yncp6hbcu {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3 8.5a2.5 2.5 0 1 0 5 0a2.5 2.5 0 1 0-5 0Zm-1 10c0-3 1.5-4.5 3.5-4.5S9 15.5 9 18.5M16 5h3l2.5 2.5V19H16Zm-6 7h3.25m-2-2l2 2l-2 2");
}
</style><path class="yncp6hbcu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:data-subject-request"} {...others} />);
}

export default Component;
