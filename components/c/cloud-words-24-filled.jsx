import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.qcxsatbjh {
  fill: currentColor;
  d: path("M12 5a6 6 0 0 0-5.92 5.02A4.5 4.5 0 0 0 6.5 19h11a4.5 4.5 0 0 0 .42-8.98A6 6 0 0 0 12 5m-2 4.5h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1 0-1.5m-4.5 4.75a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75m8.25-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1 0-1.5");
}
</style><path class="qcxsatbjh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:cloud-words-24-filled"} {...others} />);
}

export default Component;
