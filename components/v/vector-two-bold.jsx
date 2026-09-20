import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.u0yv6eb9f {
  fill: currentColor;
  d: path("m232.49 200.49l-32 32a12 12 0 0 1-17-17L195 204H80a12 12 0 0 1-12-12V69L56.49 80.49a12 12 0 1 1-17-17l32-32a12 12 0 0 1 17 0l32 32a12 12 0 0 1-17 17L92 69v111h103l-11.52-11.51a12 12 0 0 1 17-17l32 32a12 12 0 0 1 .01 17");
}
</style><path class="u0yv6eb9f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:vector-two-bold"} {...others} />);
}

export default Component;
