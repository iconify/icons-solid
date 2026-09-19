import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.vi2k_rn2d {
  fill: currentColor;
  d: path("M7 13c1.65 0 3-1.35 3-3S8.65 7 7 7s-3 1.35-3 3s1.35 3 3 3m12-6h-8v7H3V7H1v10h22v-6c0-2.21-1.79-4-4-4");
}
</style><path class="vi2k_rn2d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:airline-seat-individual-suite"} {...others} />);
}

export default Component;
