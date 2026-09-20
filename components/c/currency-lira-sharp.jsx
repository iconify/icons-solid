import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o-kj5_bjy {
  fill: currentColor;
  d: path("M9.5 20v-5.054l-3 1.875V15.62l3-1.875v-3.523l-3 1.875V10.92l3-1.9V4h1v4.404l4-2.5V7.08l-4 2.525v3.523l4-2.5v1.177l-4 2.525V19h.5q2.075 0 3.672-1.386T16.462 14h1.019q-.173 2.56-2.028 4.28T11 20z");
}
</style><path class="o-kj5_bjy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:currency-lira-sharp"} {...others} />);
}

export default Component;
