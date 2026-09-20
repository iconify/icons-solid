import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.w-mphhb9o {
  fill: currentColor;
  d: path("M240 192h-8V98.67a16 16 0 0 0-7.12-13.31l-88-58.67a16 16 0 0 0-17.75 0l-88 58.67A16 16 0 0 0 24 98.67V192h-8a8 8 0 0 0 0 16h224a8 8 0 0 0 0-16M40 98.67L128 40l88 58.66V192h-24v-56a8 8 0 0 0-8-8H72a8 8 0 0 0-8 8v56H40ZM176 144v16h-40v-16Zm-56 16H80v-16h40Zm-40 16h40v16H80Zm56 0h40v16h-40Z");
}
</style><path class="w-mphhb9o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:garage"} {...others} />);
}

export default Component;
