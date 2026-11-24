import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qc8fpeulp {
  fill: currentColor;
  d: path("M7 8V7a5 5 0 0 1 10 0v1h1a3 3 0 0 1 3 3v8a3 3 0 0 1-3 3H6a3 3 0 0 1-3-3v-8a3 3 0 0 1 3-3Zm8-1a3 3 0 1 0-6 0v1h6Zm-6 9h6a1 1 0 0 0 0-2H9a1 1 0 0 0 0 2");
}
</style><path class="qc8fpeulp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:lock-minus-fill"} {...others} />);
}

export default Component;
