import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tqnj9_sxq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 21.25V11.5m-4 9.75h8m-4-8.75c0-3.5-2.25-6-6.75-6c0 3.75 2.25 6 6.75 6Zm0-2.5c0-3.75 2.25-6.25 6.75-6.25c0 4-2.25 6.25-6.75 6.25Z");
}
</style><path class="tqnj9_sxq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:sprout-sharp"} {...others} />);
}

export default Component;
