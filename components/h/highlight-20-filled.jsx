import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.c6-nfac0o {
  fill: currentColor;
  d: path("M4.5 2A1.5 1.5 0 0 0 3 3.5v3A1.5 1.5 0 0 0 4.5 8h11A1.5 1.5 0 0 0 17 6.5v-3A1.5 1.5 0 0 0 15.5 2zM6 11a2 2 0 0 1-2-2h12a2 2 0 0 1-2 2zm0 1h8v1.074a2 2 0 0 1-1.106 1.789l-6.17 3.085A.5.5 0 0 1 6 17.501z");
}
</style><path class="c6-nfac0o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:highlight-20-filled"} {...others} />);
}

export default Component;
