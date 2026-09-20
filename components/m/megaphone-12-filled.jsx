import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":12,"height":12};
const content = `<style>.w_jvynuzi {
  fill: currentColor;
  d: path("M8.963 1.104A1.5 1.5 0 0 1 11 2.504v5.998A1.5 1.5 0 0 1 9.044 9.93l-2.062-.658A2 2 0 0 1 3 9v-.997l-.956-.305A1.5 1.5 0 0 1 1 6.27V5.188a1.5 1.5 0 0 1 .963-1.401zM4 8.322V9a1 1 0 0 0 2 0v-.04z");
}
</style><path class="w_jvynuzi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:megaphone-12-filled"} {...others} />);
}

export default Component;
