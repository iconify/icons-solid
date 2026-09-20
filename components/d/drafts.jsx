import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qhkocxz_s {
  fill: currentColor;
  d: path("m12 1l9.05 5.4q.45.275.7.75t.25 1V19q0 .825-.587 1.413T20 21H4q-.825 0-1.412-.587T2 19V8.15q0-.525.25-1t.7-.75zm0 11.65L19.8 8L12 3.35L4.2 8z");
}
</style><path class="qhkocxz_s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:drafts"} {...others} />);
}

export default Component;
