import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.l0-6eqbas {
  fill: currentColor;
  d: path("M2.146 2.147a.5.5 0 0 1 .708 0l15 15a.5.5 0 0 1-.707.707L13.293 14H5.469a2.5 2.5 0 0 1-2.435-1.934l-.698-3A2.5 2.5 0 0 1 4.77 6h.522L2.146 2.854a.5.5 0 0 1 0-.707M15.23 6a2.5 2.5 0 0 1 2.435 3.068l-.7 3c-.161.69-.6 1.257-1.182 1.594L8.121 6zm-8.229 4.5a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1m2 0a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1m-3-2a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1m1.824.032a.5.5 0 1 0 .642.642zm4.176-.032a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1m2 0a.5.5 0 1 0 0 1a.5.5 0 0 0 0-1");
}
</style><path class="l0-6eqbas"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:serial-port-off-20-filled"} {...others} />);
}

export default Component;
