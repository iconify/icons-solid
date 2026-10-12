import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.f69ot3b7s {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 7h2l.45.89l1.6 3.22l.45.89l-.45.89l-1.6 3.22l-.45.89h-3l.45-.89l1.6-3.22l.45-.89l-.45-.89l-1.6-3.22L2.75 7zM10 7h2l.45.89l1.6 3.22l.45.89l-.45.89l-1.6 3.22L12 17H9l.45-.89l1.6-3.22l.45-.89l-.45-.89l-1.6-3.22L9 7zm6.25 0h2l.45.89l1.6 3.22l.45.89l-.45.89l-1.6 3.22l-.45.89h-3l.45-.89l1.6-3.22l.45-.89l-.45-.89l-1.6-3.22l-.45-.89z");
}
</style><path class="f69ot3b7s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:kill-chain-sharp"} {...others} />);
}

export default Component;
