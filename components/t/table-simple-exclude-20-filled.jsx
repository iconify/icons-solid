import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.vhcpikybp {
  fill: currentColor;
  d: path("M4.5 2H8v6H2V4.5A2.5 2.5 0 0 1 4.5 2M2 9v3.5A2.5 2.5 0 0 0 4.5 15H8V9zm13-1V4.5A2.5 2.5 0 0 0 12.5 2H9v6zm-4 5a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2z");
}
</style><path class="vhcpikybp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:table-simple-exclude-20-filled"} {...others} />);
}

export default Component;
