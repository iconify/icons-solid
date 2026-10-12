import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vo4u71bpk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M4.25 2.75c.5 7 3.5 11 7.75 11.75c4.25-.75 7.25-4.75 7.75-11.75m-7.22 12.78l1.94 1.94q.53.53.02 1.08l-1.98 2.15q-.51.55-1.02 0l-1.98-2.15Q9 18 9.53 17.47l1.94-1.94q.53-.53 1.06 0");
}
</style><path class="vo4u71bpk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:necklace"} {...others} />);
}

export default Component;
