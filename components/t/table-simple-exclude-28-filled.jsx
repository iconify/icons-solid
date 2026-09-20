import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":28,"height":28};
const content = `<style>.raripdnwt {
  fill: currentColor;
  d: path("M5.75 2H11v9H2V5.75A3.75 3.75 0 0 1 5.75 2M2 12.5v5.25a3.75 3.75 0 0 0 3.75 3.75H11v-9zM21.5 11V5.75A3.75 3.75 0 0 0 17.75 2H12.5v9zM14 16.75A2.75 2.75 0 0 1 16.75 14h6.5A2.75 2.75 0 0 1 26 16.75v6.5A2.75 2.75 0 0 1 23.25 26h-6.5A2.75 2.75 0 0 1 14 23.25z");
}
</style><path class="raripdnwt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:table-simple-exclude-28-filled"} {...others} />);
}

export default Component;
