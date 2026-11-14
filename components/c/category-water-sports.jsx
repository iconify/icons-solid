import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.yz-qykbqk {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.5 13C5 10 7 10 9 12q3 3 6 0c2-2 4-2 6.5 1m-19 5C5 15 7 15 9 17q3 3 6 0c2-2 4-2 6.5 1M12 4v5");
}
</style><path class="yz-qykbqk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:category-water-sports"} {...others} />);
}

export default Component;
