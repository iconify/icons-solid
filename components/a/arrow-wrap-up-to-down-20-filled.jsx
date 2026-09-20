import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.io1x901dm {
  fill: currentColor;
  d: path("M4 13.75a3.25 3.25 0 0 0 6.5 0v-7.5a1.75 1.75 0 1 1 3.5 0v9.19l-.22-.22a.75.75 0 1 0-1.06 1.06l1.5 1.5a.75.75 0 0 0 1.06 0l1.5-1.5a.75.75 0 1 0-1.06-1.06l-.22.22V6.25a3.25 3.25 0 0 0-6.5 0v7.5a1.75 1.75 0 1 1-3.5 0v-10a.75.75 0 0 0-1.5 0z");
}
</style><path class="io1x901dm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-wrap-up-to-down-20-filled"} {...others} />);
}

export default Component;
