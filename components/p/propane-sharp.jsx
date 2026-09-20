import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.fo9d67tkv {
  fill: currentColor;
  d: path("M10 6h4V5h-4zM7 21v-3q-2.5 0-4.25-1.75T1 12t1.75-4.25T7 6h1V3h8v3h1q2.5 0 4.25 1.75T23 12t-1.75 4.25T17 18v3h-2v-3H9v3z");
}
</style><path class="fo9d67tkv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:propane-sharp"} {...others} />);
}

export default Component;
