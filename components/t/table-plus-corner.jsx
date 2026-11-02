import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.zh_kdsbis {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  stroke-width: var(--svg-stroke-width--2px, 2px);
  d: path("M12 4h6a2 2 0 0 1 2 2v3M9 20H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h6M4 9h16M4 15h5m3-11v5m1 8h8m-4-4v8");
}
</style><path class="zh_kdsbis"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:table-plus-corner"} {...others} />);
}

export default Component;
