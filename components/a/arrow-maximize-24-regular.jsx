import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.r3fiplb-v {
  fill: currentColor;
  d: path("M19.25 4a.75.75 0 0 1 .75.75v7.5a.75.75 0 0 1-1.5 0V6.56L6.56 18.5h5.69a.75.75 0 0 1 0 1.5h-7.5a.75.75 0 0 1-.75-.75v-7.5a.75.75 0 0 1 1.5 0v5.69L17.44 5.5h-5.69a.75.75 0 0 1 0-1.5z");
}
</style><path class="r3fiplb-v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-maximize-24-regular"} {...others} />);
}

export default Component;
