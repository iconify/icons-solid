import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.dy7we-oga {
  fill: currentColor;
  d: path("M170.34 130.34L204.69 96H88a48 48 0 0 0 0 96h88a8 8 0 0 1 0 16H88a64 64 0 0 1 0-128h116.69l-34.35-34.34a8 8 0 0 1 11.32-11.32l48 48a8 8 0 0 1 0 11.32l-48 48a8 8 0 0 1-11.32-11.32");
}
</style><path class="dy7we-oga"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-u-up-right"} {...others} />);
}

export default Component;
