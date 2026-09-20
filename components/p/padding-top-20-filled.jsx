import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.u5kciwzrp {
  fill: currentColor;
  d: path("M3.75 2.75A.75.75 0 0 1 4.5 2h1.313a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1-.75-.75m3.938 0a.75.75 0 0 1 .75-.75h2.624a.75.75 0 0 1 0 1.5H8.439a.75.75 0 0 1-.75-.75m5.25 0a.75.75 0 0 1 .75-.75H15a.75.75 0 0 1 0 1.5h-1.312a.75.75 0 0 1-.75-.75M3.75 17.25a.75.75 0 0 1 .75-.75H15a.75.75 0 0 1 0 1.5H4.5a.75.75 0 0 1-.75-.75m6.53-12.53a.75.75 0 0 0-1.06 0L4.97 8.97a.75.75 0 1 0 1.06 1.06L9 7.06v7.19a.75.75 0 0 0 1.5 0V7.06l2.97 2.97a.75.75 0 1 0 1.06-1.06z");
}
</style><path class="u5kciwzrp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:padding-top-20-filled"} {...others} />);
}

export default Component;
