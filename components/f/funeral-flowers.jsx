import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.eq2eroqvw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 11c-4-1-6.5-4.5-6-8c2.5 1 4.5 2 6 4c1.5-2 3.5-3 6-4c.5 3.5-2 7-6 8m0 0v10.5m0-5.5l-4-2v4Zl4-2v4Z");
}
</style><path class="eq2eroqvw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix:funeral-flowers"} {...others} />);
}

export default Component;
