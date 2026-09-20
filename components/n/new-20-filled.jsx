import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.tpnnbdb8o {
  fill: currentColor;
  d: path("M15.5 2.75a.75.75 0 0 1 .75.75v8a.75.75 0 0 1-1.5 0v-8a.75.75 0 0 1 .75-.75M5.97 5.97a.75.75 0 0 1 1.06 0l6 6a.75.75 0 1 1-1.06 1.06l-6-6a.75.75 0 0 1 0-1.06M3.5 14.75a.75.75 0 0 0 0 1.5h8a.75.75 0 0 0 0-1.5z");
}
</style><path class="tpnnbdb8o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:new-20-filled"} {...others} />);
}

export default Component;
