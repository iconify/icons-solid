import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l3a8vdbad {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 2.75h2.25a2.75 2.75 0 0 0 5.5 0H17v.75c0 3.5.75 5.5 2.25 6.75v11H4.75v-11C6.25 9 7 7 7 3.5Zm-2 14.5h14");
}
</style><path class="l3a8vdbad"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:tank-top-sharp"} {...others} />);
}

export default Component;
