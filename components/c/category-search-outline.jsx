import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.sng5-nban {
  fill: currentColor;
  d: path("M2 20.5v-8h8v8zm2-2h4v-4H4zM5.5 10L11 1l5.5 9zm3.55-2h3.9L11 4.85zm12.525 14.95l-2.65-2.65q-.525.35-1.137.525T16.5 21q-1.875 0-3.187-1.312T12 16.5t1.313-3.187T16.5 12t3.188 1.313T21 16.5q0 .65-.175 1.263t-.5 1.137l2.65 2.65zm-3.3-4.675Q19 17.55 19 16.5t-.725-1.775T16.5 14t-1.775.725T14 16.5t.725 1.775T16.5 19t1.775-.725M11 8");
}
</style><path class="sng5-nban"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:category-search-outline"} {...others} />);
}

export default Component;
