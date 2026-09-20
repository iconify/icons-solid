import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.e6zk1fbpt {
  fill: currentColor;
  d: path("M128 174a46.06 46.06 0 0 0 46-46V64a46 46 0 0 0-92 0v64a46.06 46.06 0 0 0 46 46M94 64a34 34 0 0 1 68 0v64a34 34 0 0 1-68 0Zm40 141.75V240a6 6 0 0 1-12 0v-34.25A78.09 78.09 0 0 1 50 128a6 6 0 0 1 12 0a66 66 0 0 0 132 0a6 6 0 0 1 12 0a78.09 78.09 0 0 1-72 77.75");
}
</style><path class="e6zk1fbpt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:microphone-light"} {...others} />);
}

export default Component;
