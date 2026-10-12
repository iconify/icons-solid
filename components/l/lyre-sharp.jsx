import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.pb5zlg61x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8 20.25c-3-1-3.75-4.25-3.75-7.75V4.833L3 2.75m13 17.5c3-1 3.75-4.25 3.75-7.75V4.833L21 2.75M4.25 7.25h15.5M8 20.25h8m-7-13v13m3-13v13m3-13v13");
}
</style><path class="pb5zlg61x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:lyre-sharp"} {...others} />);
}

export default Component;
