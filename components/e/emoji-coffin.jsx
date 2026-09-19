import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.x39bjmgjq {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M21.352 42.5h5.296c.763 0 1.438-.494 1.67-1.222l7.218-22.66a1.76 1.76 0 0 0-.192-1.479L28.445 6.312a1.75 1.75 0 0 0-1.477-.812h-5.936c-.599 0-1.156.306-1.478.812l-6.898 10.827c-.28.44-.35.982-.192 1.48l7.218 22.659a1.75 1.75 0 0 0 1.67 1.222");
}
</style><path class="x39bjmgjq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:emoji-coffin"} {...others} />);
}

export default Component;
