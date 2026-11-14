import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pfkoq_ghz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12.6 16H2.5V3.5h15v9.2M6 3.5V16m6.5-12.5V16m2 2l2.25-2.5h4.75v5h-4.75Zm2.75 0h.01");
}
</style><path class="pfkoq_ghz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:rent-movie"} {...others} />);
}

export default Component;
