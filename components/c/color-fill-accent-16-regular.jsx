import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":16,"height":16};
const content = `<style>.o5fg5ewle {
  fill: currentColor;
  d: path("M8.768 11.354a2.5 2.5 0 0 1-3.536 0L3.474 9.596A1.5 1.5 0 0 0 2.5 11v1A1.5 1.5 0 0 0 4 13.5h8a1.5 1.5 0 0 0 1.36-.866a2.5 2.5 0 0 1-3.352-2.52z");
}
</style><path class="o5fg5ewle"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:color-fill-accent-16-regular"} {...others} />);
}

export default Component;
