import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.z3q98obat {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M7 2.75h11.25l.13 1.24l1.74 16.02l.13 1.24h-5.5l-.18-1.24l-1.14-8.02l-.18-1.24h-2.5l-.18 1.24l-1.14 8.02l-.18 1.24h-5.5l.13-1.24L5.62 3.99l.13-1.24zM5.75 6.5h12.5M12 6.5v2");
}
</style><path class="z3q98obat"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:trousers-sharp"} {...others} />);
}

export default Component;
