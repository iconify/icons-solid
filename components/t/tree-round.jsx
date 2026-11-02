import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.mvv_ktbyy {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M9 17c-3.174.157-5.366-3.13-4-6c-.962-2.253.56-4.788 3-5c1.676-3.251 6.324-3.251 8 0c2.44.212 3.962 2.747 3 5c1.366 2.87-.826 6.157-4 6Zm3 4v-4m0 0v-3m-3-3l3 3l3-3");
}
</style><path class="mvv_ktbyy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:tree-round"} {...others} />);
}

export default Component;
