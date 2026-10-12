import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.tmtwjz6nb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M12 2.75v5.5m-2.5-5.5h5M9 8.25h7v2.5l-.004.371l-.246.279l-3 9.1l-.75 2.021l-.75-2.021l-3-9.1l-.246-.279L8 10.75v-2.5zm-1 3h8");
}
</style><path class="tmtwjz6nb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:plumb-bob-sharp"} {...others} />);
}

export default Component;
