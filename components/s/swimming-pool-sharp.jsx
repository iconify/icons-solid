import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jod6o3bjx {
  fill: none;
  stroke: currentColor;
  stroke-linecap: square;
  stroke-miterlimit: 2;
  stroke-width: var(--svg-stroke-width--1-5px, 1.5px);
  d: path("M8.25 13.75V5.5a2.25 2.25 0 0 0-4.5 0m12 8.25V5.5a2.25 2.25 0 0 0-4.5 0m-3 2.5h7.5m-7.5 3.25h7.5M3 17.25l2.25-1l2.25 1l2.25 1l2.25-1l2.25-1l2.25 1l2.25 1l2.25-1M3 20.5l2.25-1l2.25 1l2.25 1l2.25-1l2.25-1l2.25 1l2.25 1l2.25-1");
}
</style><path class="jod6o3bjx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoven:swimming-pool-sharp"} {...others} />);
}

export default Component;
