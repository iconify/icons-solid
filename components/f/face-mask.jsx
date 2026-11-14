import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zo_5oh02n {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 3.5;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M5 7.5h14v9H5ZM5 9c-2 0-2.5 1.5-2.5 3S3 15 5 15m14-6c2 0 2.5 1.5 2.5 3s-.5 3-2.5 3M8 10.5h8m-8 3h8");
}
</style><path class="zo_5oh02n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uix-sharp:face-mask"} {...others} />);
}

export default Component;
