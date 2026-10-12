import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.q55u3_bwk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.5 21.25V10a5.5 5.5 0 0 1 11 0v11.25ZM12 4.5v16.75M6.5 14h11m-13-3.5l-1.75 2l1.75 2m15-4l1.75 2l-1.75 2");
}
</style><path class="q55u3_bwk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:airlock-sharp"} {...others} />);
}

export default Component;
