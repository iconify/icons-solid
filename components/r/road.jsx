import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.wuf8ymu5p {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M10 2.75h4q1 0 1.25.97l4.25 16.56q.25.97-.75.97H5.25q-1 0-.75-.97L8.75 3.72Q9 2.75 10 2.75m2 2.75v2m0 3.25v2.5m0 3.25V19");
}
</style><path class="wuf8ymu5p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:road"} {...others} />);
}

export default Component;
