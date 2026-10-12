import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.c3wuwdpbz {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 2.75h9v3.5H7zm2.5 3.5H15v7l1.21.89l2.33 1.72l1.21.89l-.88 1.22l-1.49 2.06l-.88 1.22l-1.21-.89l-6.08-4.47L8 15V6.25z");
}
</style><path class="c3wuwdpbz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:christmas-stocking-sharp"} {...others} />);
}

export default Component;
