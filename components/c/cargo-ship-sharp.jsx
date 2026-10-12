import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ih4gafgxi {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M2.75 13.25h18.5l-2 5.25l-.367 1.23l-1.283.02H6.4l-1.283-.02l-.367-1.23Zm2-7.5h5.5v4.5h-5.5zm8.5 1h6v3.5h-6z");
}
</style><path class="ih4gafgxi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:cargo-ship-sharp"} {...others} />);
}

export default Component;
