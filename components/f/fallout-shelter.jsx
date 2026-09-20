import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.b8bixabgi {
  fill: currentColor;
  d: path("M128 24a104 104 0 1 0 104 104A104.11 104.11 0 0 0 128 24m0 192a88 88 0 1 1 88-88a88.1 88.1 0 0 1-88 88m71.05-91.77A8 8 0 0 0 192 120h-49l23.71-35.56A8 8 0 0 0 160 72H96a8 8 0 0 0-6.66 12.44L113.05 120H64a8 8 0 0 0-6.66 12.44l32 48a8 8 0 0 0 13.32 0l25.34-38l25.34 38a8 8 0 0 0 13.32 0l32-48a8 8 0 0 0 .39-8.21m-54-36.23L128 113.58L111 88ZM96 161.58L79 136h34.1Zm64 0L143 136h34.1Z");
}
</style><path class="b8bixabgi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:fallout-shelter"} {...others} />);
}

export default Component;
