import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.e3zafft-v {
  fill: currentColor;
  d: path("M204 80a4 4 0 0 1-4 4h-36.58a57 57 0 0 1 .58 8a56.06 56.06 0 0 1-56 56H82.35l80.34 73a4 4 0 1 1-5.38 5.92l-88-80A4 4 0 0 1 72 140h36a48 48 0 0 0 47.32-56H72a4 4 0 0 1 0-8h81.25A48.09 48.09 0 0 0 108 44H72a4 4 0 0 1 0-8h128a4 4 0 0 1 0 8h-63.19a56.24 56.24 0 0 1 24.85 32H200a4 4 0 0 1 4 4");
}
</style><path class="e3zafft-v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:currency-inr-thin"} {...others} />);
}

export default Component;
