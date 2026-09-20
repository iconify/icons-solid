import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.nqfq1cciq {
  fill: currentColor;
  d: path("M11 22q-2.5 0-4.25-1.75T5 16v-2q1.775-.025 3.35.725T11 16.75v-3.825q-2.15-.35-3.575-2.013T6 7V3.6q0-.65.575-.913t1.075.163l1.85 1.6l1.725-2.1Q11.525 2 12 2t.775.35l1.725 2.1l1.85-1.6q.5-.425 1.075-.162T18 3.6V7q0 2.25-1.425 3.913T13 12.925v3.825q1.075-1.275 2.65-2.025T19 14v2q0 2.5-1.75 4.25T13 22z");
}
</style><path class="nqfq1cciq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:deceased"} {...others} />);
}

export default Component;
