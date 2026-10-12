import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ly0lnub_b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M9.75 7.25q.84 6.16 7 7q-6.16.84-7 7q-.84-6.16-7-7q6.16-.84 7-7ZM18 2.75q.39 2.86 3.25 3.25q-2.86.39-3.25 3.25q-.39-2.86-3.25-3.25q2.86-.39 3.25-3.25ZM18.5 16l.27 1.98l1.98.27l-1.98.27l-.27 1.98l-.27-1.98l-1.98-.27l1.98-.27z");
}
</style><path class="ly0lnub_b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:ai-sparkle-sharp"} {...others} />);
}

export default Component;
