import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.xm5_6-bcb {
  fill: currentColor;
  d: path("M4.5 16a1 1 0 1 1 0 2a1 1 0 0 1 0-2Zm5.5 0a1 1 0 1 1 0 2a1 1 0 0 1 0-2Zm6.5 1a1 1 0 1 0-2 0a1 1 0 0 0 2 0ZM5 14.5a.5.5 0 0 1-1 0v-12a.5.5 0 0 1 1 0v12Zm5 .5a.5.5 0 0 0 .5-.5v-12a.5.5 0 0 0-1 0v12a.5.5 0 0 0 .5.5Zm6-.5a.5.5 0 0 1-1 0v-12a.5.5 0 0 1 1 0v12Z");
}
</style><path class="xm5_6-bcb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:text-bullet-list-rotate-270-20-regular"} {...others} />);
}

export default Component;
