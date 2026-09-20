import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.nmb6w4ssc {
  fill: currentColor;
  d: path("M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m51.58 57.79l-32 64a4.08 4.08 0 0 1-1.79 1.79l-64 32a4 4 0 0 1-5.37-5.37l32-64a4.08 4.08 0 0 1 1.79-1.79l64-32a4 4 0 0 1 5.37 5.37");
}
</style><path class="nmb6w4ssc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:compass-fill"} {...others} />);
}

export default Component;
