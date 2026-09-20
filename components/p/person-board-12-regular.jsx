import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":12,"height":12};
const content = `<style>.vpj_5cjnp {
  fill: currentColor;
  d: path("M3 1a2 2 0 0 0-2 2v4a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V3a2 2 0 0 0-2-2zM2 3a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v4a1 1 0 0 1-1 1H3a1 1 0 0 1-1-1zm1.268 7A2 2 0 0 0 5 11h2a4 4 0 0 0 4-4V5a2 2 0 0 0-1-1.732V7a3 3 0 0 1-3 3zM6 3.5a1 1 0 1 1-2 0a1 1 0 0 1 2 0m1 2.25c0 .75-.5 1.5-2 1.5s-2-.75-2-1.5A.75.75 0 0 1 3.75 5h2.5a.75.75 0 0 1 .75.75");
}
</style><path class="vpj_5cjnp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:person-board-12-regular"} {...others} />);
}

export default Component;
