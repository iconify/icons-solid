import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.l8mzy1bly {
  fill: currentColor;
  d: path("M4 16V4zm-2 6V2h15v2.425q-.6.275-1.1.675T15 6V4H4v13.175L5.175 16H15v-4q.4.5.9.9t1.1.675V18H6zm4-8h4v-2H6zm13-2q-1.25 0-2.125-.875T16 9t.875-2.125T19 6q.275 0 .525.05t.475.125V1h4v2h-2v6q0 1.25-.875 2.125T19 12M6 11h7V9H6zm0-3h7V6H6z");
}
</style><path class="l8mzy1bly"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:lyrics-outline-sharp"} {...others} />);
}

export default Component;
