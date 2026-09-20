import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.a4fe1gb9i {
  fill: currentColor;
  d: path("M166 104a38 38 0 1 0-38 38a38 38 0 0 0 38-38m-64 0a26 26 0 1 1 26 26a26 26 0 0 1-26-26m122 98h-90v-20.25a78 78 0 1 0-12 0V202H32a6 6 0 0 0 0 12h192a6 6 0 0 0 0-12M62 104a66 66 0 1 1 66 66a66.08 66.08 0 0 1-66-66");
}
</style><path class="a4fe1gb9i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:webcam-light"} {...others} />);
}

export default Component;
