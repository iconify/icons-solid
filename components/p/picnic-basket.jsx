import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yhyfubbda {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M6.25 11.5a5.75 5.75 0 0 1 11.5 0M4 11.5h16q1.25 0 1 1.22l-1.5 7.31q-.25 1.22-1.5 1.22H6q-1.25 0-1.5-1.22L3 12.72q-.25-1.22 1-1.22m-.58 3.25h17.16M4.08 18h15.84");
}
</style><path class="yhyfubbda"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:picnic-basket"} {...others} />);
}

export default Component;
