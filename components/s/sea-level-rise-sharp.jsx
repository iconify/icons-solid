import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ttd9s_b2x {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 11.75v-9M8.75 6L12 2.75L15.25 6m-12.5 9.75l1.54-2l1.54 2l1.54 2l1.54-2l1.54-2l1.54 2l1.54 2l1.54-2l1.54-2l1.54 2l1.54 2l1.54-2m-18.48 4.5l1.54-2l1.54 2l1.54 2l1.54-2l1.54-2l1.54 2l1.54 2l1.54-2l1.54-2l1.54 2l1.54 2l1.54-2");
}
</style><path class="ttd9s_b2x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:sea-level-rise-sharp"} {...others} />);
}

export default Component;
