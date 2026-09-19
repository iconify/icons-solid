import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.dnm3onb1d {
  fill: currentColor;
  d: path("M14.73 13.31A6.4 6.4 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.43 0 2.74-.48 3.81-1.27L19.59 21L21 19.59zM9.5 14C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14");
}

.yxkhq_k1e {
  fill: currentColor;
  d: path("m9.5 6l-.79 2.44H6.25l2.01 1.59l-.77 2.47l2.01-1.53l2.01 1.53l-.77-2.47l2.01-1.59h-2.46z");
}
</style><path class="dnm3onb1d"/><path class="yxkhq_k1e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:twotone-saved-search"} {...others} />);
}

export default Component;
