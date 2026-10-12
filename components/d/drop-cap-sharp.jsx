import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.h91bfmb0q {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M13.5 4.75h6.75M13.5 9.5h6.75m-6.75 4.75h6.75m-16.5 5h16.5m-17-4.75L6.75 4l3.5 10.5m-5.7-4h4.4");
}
</style><path class="h91bfmb0q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:drop-cap-sharp"} {...others} />);
}

export default Component;
