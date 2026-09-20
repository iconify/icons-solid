import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jwyqshbrz {
  fill: currentColor;
  d: path("M12.75 13.75a.75.75 0 0 1-1.5 0V4.494l-3.484 3.3a.75.75 0 1 1-1.032-1.088l4.75-4.5a.75.75 0 0 1 1.032 0l4.75 4.5a.75.75 0 0 1-1.032 1.088l-3.484-3.3zM15 19a3 3 0 1 1-6 0a3 3 0 0 1 6 0m-4.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0");
}
</style><path class="jwyqshbrz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-step-out-24-regular"} {...others} />);
}

export default Component;
