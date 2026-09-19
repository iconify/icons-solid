import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.vnht4mbew {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M41.619 13.53a9.41 9.41 0 0 1-1.875 10.63L24 39.904L8.256 24.16h0A9.41 9.41 0 1 1 24 15.07A9.41 9.41 0 0 1 37.868 9.4L24 23.269l-7.426-7.427a2.353 2.353 0 0 0-3.327 3.327L24 29.922l17.196-17.196q.228.39.422.803z");
}
</style><path class="vnht4mbew"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:blood-test-tracker"} {...others} />);
}

export default Component;
