import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.v9amh-b1p {
  fill: currentColor;
  d: path("M7.499 3.5a1.5 1.5 0 1 1-2.999 0a1.5 1.5 0 0 1 2.999 0m-.5 4v13.503a1 1 0 0 1-1.993.117L5 21.003V7.5a1 1 0 0 1 1.994-.116zm6.5-4a1.5 1.5 0 1 1-2.999 0a1.5 1.5 0 0 1 2.999 0m-.5 4v13.503a1 1 0 0 1-1.993.117L11 21.003V7.5a1 1 0 0 1 1.994-.116zm6.493-4a1.5 1.5 0 1 1-3 0a1.5 1.5 0 0 1 3 0m-.493 4v13.503a1 1 0 0 1-1.994.117L17 21.003V7.5a1 1 0 0 1 1.993-.116z");
}
</style><path class="v9amh-b1p"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:text-bullet-list-90-24-filled"} {...others} />);
}

export default Component;
