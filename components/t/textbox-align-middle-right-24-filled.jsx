import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cmvjgsbec {
  fill: currentColor;
  d: path("M5.75 3A2.75 2.75 0 0 0 3 5.75v12.5A2.75 2.75 0 0 0 5.75 21h12.5A2.75 2.75 0 0 0 21 18.25V5.75A2.75 2.75 0 0 0 18.25 3zm11 6a.75.75 0 0 1 0 1.5h-9.5a.75.75 0 0 1 0-1.5zm0 4a.75.75 0 0 1 0 1.5h-6.5a.75.75 0 0 1 0-1.5z");
}
</style><path class="cmvjgsbec"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:textbox-align-middle-right-24-filled"} {...others} />);
}

export default Component;
