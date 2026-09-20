import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ht79-ohdk {
  fill: currentColor;
  d: path("M15.295 16.234a.75.75 0 0 1-1.09 1.032l-4.5-4.75a.75.75 0 0 1 0-1.032l4.5-4.75a.75.75 0 0 1 1.09 1.032l-3.301 3.484h9.256a.75.75 0 0 1 0 1.5h-9.256zM2 12a3 3 0 1 1 6 0a3 3 0 0 1-6 0m1.5 0a1.5 1.5 0 1 0 3 0a1.5 1.5 0 0 0-3 0");
}
</style><path class="ht79-ohdk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-step-in-left-24-regular"} {...others} />);
}

export default Component;
