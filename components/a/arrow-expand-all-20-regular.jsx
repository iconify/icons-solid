import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.x2bki6bwm {
  fill: currentColor;
  d: path("M2 4.5a.5.5 0 0 1 .5-.5h15a.5.5 0 0 1 0 1h-15a.5.5 0 0 1-.5-.5m3.146 11.354a.5.5 0 0 0 .708 0l2.5-2.5a.5.5 0 0 0-.708-.708L6 14.293V7.5a.5.5 0 0 0-1 0v6.793l-1.646-1.647a.5.5 0 0 0-.708.708zM17.5 8h-7a.5.5 0 0 1 0-1h7a.5.5 0 0 1 0 1");
}
</style><path class="x2bki6bwm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:arrow-expand-all-20-regular"} {...others} />);
}

export default Component;
