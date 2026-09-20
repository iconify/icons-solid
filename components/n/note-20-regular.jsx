import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.lowruubap {
  fill: currentColor;
  d: path("M14 3a3 3 0 0 1 2.995 2.824L17 6v4.379a2 2 0 0 1-.467 1.284l-.119.13l-4.621 4.621a2 2 0 0 1-1.238.578l-.176.008H6a3 3 0 0 1-2.995-2.824L3 14V6a3 3 0 0 1 2.824-2.995L6 3zm0 1H6a2 2 0 0 0-1.995 1.85L4 6v8a2 2 0 0 0 1.85 1.995L6 16h4v-3a3 3 0 0 1 2.824-2.995L13 10h3V6a2 2 0 0 0-1.85-1.995zm1.783 7.001L13 11a2 2 0 0 0-1.995 1.85L11 13v2.781l.086-.074l4.621-4.621q.04-.04.075-.085");
}
</style><path class="lowruubap"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:note-20-regular"} {...others} />);
}

export default Component;
