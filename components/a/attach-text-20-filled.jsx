import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.ziwkb-xcx {
  fill: currentColor;
  d: path("M6.75 3.5A2.25 2.25 0 0 0 4.5 5.75v7.5a.75.75 0 0 1-1.5 0v-7.5a3.75 3.75 0 0 1 7.474-.448a.8.8 0 0 1 .026.198v10.252A2.25 2.25 0 0 1 6 15.75V5.769a.75.75 0 0 1 1.5 0v9.981a.75.75 0 0 0 1.5 0v-10A2.25 2.25 0 0 0 6.75 3.5M12 8.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75m.75-3.75a.75.75 0 0 0 0 1.5h4.5a.75.75 0 0 0 0-1.5zM12 11.25a.75.75 0 0 1 .75-.75h4.5a.75.75 0 0 1 0 1.5h-4.5a.75.75 0 0 1-.75-.75m.75 2.25a.75.75 0 0 0 0 1.5h2a.75.75 0 0 0 0-1.5z");
}
</style><path class="ziwkb-xcx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:attach-text-20-filled"} {...others} />);
}

export default Component;
