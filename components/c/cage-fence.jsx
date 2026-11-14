import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jwfjo5_iw {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.5 3h7L21 8.5v7L15.5 21h-7L3 15.5v-7ZM3.25 8.25l12.5 12.5m-7.5-17.5l12.5 12.5m-17.5 0l12.5-12.5m-7.5 17.5l12.5-12.5");
}
</style><path class="jwfjo5_iw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:cage-fence"} {...others} />);
}

export default Component;
