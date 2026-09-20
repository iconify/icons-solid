import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.grj3mebhn {
  fill: currentColor;
  d: path("M205.66 85.66a8 8 0 0 1-11.32 0L160 51.31V128A104.11 104.11 0 0 1 56 232a8 8 0 0 1 0-16a88.1 88.1 0 0 0 88-88V51.31l-34.34 34.35a8 8 0 0 1-11.32-11.32l48-48a8 8 0 0 1 11.32 0l48 48a8 8 0 0 1 0 11.32");
}
</style><path class="grj3mebhn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:arrow-bend-right-up"} {...others} />);
}

export default Component;
