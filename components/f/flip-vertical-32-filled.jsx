import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":32,"height":32};
const content = `<style>.ex7xyimfd {
  fill: currentColor;
  d: path("M27.43 2.201c.356.23.57.625.57 1.049v10.5c0 .69-.56 1.25-1.25 1.25H3.25a1.25 1.25 0 0 1-.51-2.391l23.5-10.5a1.25 1.25 0 0 1 1.19.092M9.112 12.5H25.5V5.178zM28 29a1 1 0 0 1-1.416.91l-24-11A1 1 0 0 1 3 17h24a1 1 0 0 1 1 1z");
}
</style><path class="ex7xyimfd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:flip-vertical-32-filled"} {...others} />);
}

export default Component;
