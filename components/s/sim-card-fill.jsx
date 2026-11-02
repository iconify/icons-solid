import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ispjzdbme {
  fill: currentColor;
  d: path("M4 19V5a3 3 0 0 1 3-3h7c1.039 0 1.992.578 2.707 1.293l2 2C19.422 6.008 20 6.961 20 8v11a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3m5 1h6a3 3 0 0 0 3-3V9a3 3 0 0 0-3-3H9a3 3 0 0 0-3 3v8a3 3 0 0 0 3 3M8 10a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2Zm2 2h4v-2h-4Zm4 4v-2h-4v2Z");
}
</style><path class="ispjzdbme"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:sim-card-fill"} {...others} />);
}

export default Component;
