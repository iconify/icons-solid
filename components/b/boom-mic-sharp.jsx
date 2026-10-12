import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.hrfwxacmr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 4.75H16m0 0v2.5m-2.75 0h5.5v14h-5.5zm0 4h5.5m-5.5 3h5.5m-5.5 3h5.5M2.75 3v3.5");
}
</style><path class="hrfwxacmr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:boom-mic-sharp"} {...others} />);
}

export default Component;
