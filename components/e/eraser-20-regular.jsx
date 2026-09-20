import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.hk8ymcwek {
  fill: currentColor;
  d: path("M11.197 2.44a1.5 1.5 0 0 1 2.121 0l4.243 4.242a1.5 1.5 0 0 1 0 2.121L9.364 17H14.5a.5.5 0 1 1 0 1H7.82a1.5 1.5 0 0 1-1.14-.437L2.437 13.32a1.5 1.5 0 0 1 0-2.121zm1.414.706a.5.5 0 0 0-.707 0L5.538 9.512l4.95 4.95l6.366-6.366a.5.5 0 0 0 0-.707zM9.781 15.17l-4.95-4.95l-1.687 1.687a.5.5 0 0 0 0 .707l4.243 4.243a.5.5 0 0 0 .707 0z");
}
</style><path class="hk8ymcwek"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:eraser-20-regular"} {...others} />);
}

export default Component;
