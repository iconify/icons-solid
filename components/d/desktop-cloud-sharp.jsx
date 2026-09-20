import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.aye0t9gly {
  fill: currentColor;
  d: path("M9 14h6.5q1.05 0 1.775-.737T18 11.474T17.25 9.7t-1.8-.725q-.2-1.275-1.175-2.125T12 6q-1.025 0-1.875.55T8.85 8.025q-1.2.05-2.025.913T6 11q0 1.25.875 2.125T9 14m-1 7v-2h2v-2H2V3h20v14h-8v2h2v2z");
}
</style><path class="aye0t9gly"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:desktop-cloud-sharp"} {...others} />);
}

export default Component;
