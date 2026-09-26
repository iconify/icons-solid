import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o3hj0wokg {
  fill: currentColor;
  d: path("M21 18a1 1 0 1 1 0 2H6a1 1 0 1 1 0-2zM6.5 7a4.5 4.5 0 1 1 0 9a4.5 4.5 0 0 1 0-9m0 2a.5.5 0 0 0-.5.5V11H4.5a.5.5 0 0 0 0 1H6v1.5a.5.5 0 0 0 1 0V12h1.5a.5.5 0 0 0 0-1H7V9.5a.5.5 0 0 0-.5-.5M21 13a1 1 0 1 1 0 2h-7a1 1 0 1 1 0-2zm0-5a1 1 0 1 1 0 2h-7a1 1 0 1 1 0-2zm0-5a1 1 0 1 1 0 2H6a1 1 0 0 1 0-2z");
}
</style><path class="o3hj0wokg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:text-expand-24-filled"} {...others} />);
}

export default Component;
