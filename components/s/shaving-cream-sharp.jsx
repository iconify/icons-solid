import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g98sikbdb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7.25 9.5A2.25 2.25 0 0 1 8 5.25a3 3 0 0 1 5.25-.5a3 3 0 0 1 3.5 4.75Zm-.25 3h10v8.75H7zm0 3h10");
}
</style><path class="g98sikbdb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:shaving-cream-sharp"} {...others} />);
}

export default Component;
