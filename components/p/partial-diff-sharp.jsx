import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.kapzdccsm {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("m7.5 5.5l2.1-1.75H12c3.25 0 5.5 2.75 5.5 7.5c0 5.75-2.75 9-6.25 9c-2.75 0-4.75-2-4.75-4.5s2-4.5 4.75-4.5c2.25 0 4.25 1.25 5.75 3.5");
}
</style><path class="kapzdccsm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:partial-diff-sharp"} {...others} />);
}

export default Component;
