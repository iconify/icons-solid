import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":256,"height":256};
const content = `<style>.tud_au7ls {
  fill: currentColor;
  d: path("M194.83 205.17a4 4 0 0 1-5.66 5.66l-80-80a4 4 0 0 1 0-5.66l80-80a4 4 0 1 1 5.66 5.66L117.66 128ZM72 44a4 4 0 0 0-4 4v160a4 4 0 0 0 8 0V48a4 4 0 0 0-4-4");
}
</style><path class="tud_au7ls"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ph:caret-line-left-thin"} {...others} />);
}

export default Component;
