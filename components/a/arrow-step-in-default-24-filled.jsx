import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.ccz07able {
  fill: currentColor;
  d: path("M12 2a.75.75 0 0 1 .75.75v9.256l3.484-3.3a.75.75 0 1 1 1.032 1.088l-4.75 4.5a.75.75 0 0 1-1.032 0l-4.75-4.5a.75.75 0 1 1 1.032-1.088l3.484 3.3V2.75A.75.75 0 0 1 12 2m3 17a3 3 0 1 1-6 0a3 3 0 0 1 6 0");
}
</style><path class="ccz07able"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-step-in-default-24-filled"} {...others} />);
}

export default Component;
