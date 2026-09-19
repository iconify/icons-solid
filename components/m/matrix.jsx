import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.r1wt2vbhr {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M12.5 8.5h-8v31h8m23 0h8v-31h-8m-23 13.631a5.75 5.75 0 0 1 5.75-5.75h0a5.75 5.75 0 0 1 5.75 5.75v9.488M12.5 16.381v15.238M24 22.131a5.75 5.75 0 0 1 5.75-5.75h0a5.75 5.75 0 0 1 5.75 5.75v9.488");
}
</style><path class="r1wt2vbhr"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:matrix"} {...others} />);
}

export default Component;
