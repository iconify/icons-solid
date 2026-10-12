import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.v4blbes0k {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 3.25L7.5 13.5h9M6.95 8.75h6.55v4.75m-5.25 0l-1 6m8.5-6l1 6m-13-1.5c3 2.75 13.5 2.75 16.5 0");
}
</style><path class="v4blbes0k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:rocking-chair"} {...others} />);
}

export default Component;
