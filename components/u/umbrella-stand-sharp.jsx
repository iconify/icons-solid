import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d66raww7o {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.5 10.25v-7h-4v2.5m9 4.5v-7.5h4v2.5m-12.25 5h11.5l-1 10v1h-9.5v-1Zm.35 3.5h10.8");
}
</style><path class="d66raww7o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:umbrella-stand-sharp"} {...others} />);
}

export default Component;
