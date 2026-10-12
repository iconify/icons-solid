import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.d91mjx7oo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M3.75 3.75h16.5l-1.5 3.5l-.394.903l-.986-.003H6.63l-.986.003l-.394-.903ZM12 10.5v6.25M9.75 14.5L12 16.75l2.25-2.25m-4.5-1.75L12 10.5l2.25 2.25m-11.5 7.5c2.5 0 3.25-1.75 5.75-1.75s3.5 1.75 6 1.75S17.75 19 21.25 19");
}
</style><path class="d91mjx7oo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:depth-sounder-sharp"} {...others} />);
}

export default Component;
