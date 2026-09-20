import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.t9gc5kz1u {
  fill: currentColor;
  d: path("M3.5 4a.5.5 0 0 0 0 1h13a.5.5 0 0 0 0-1zm4 10a.5.5 0 0 0 0 1h9a.5.5 0 0 0 0-1zM7 9.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5m-2.146 2.146l-1.5-1.5a.5.5 0 0 0-.708.708L3.793 12l-1.147 1.146a.5.5 0 0 0 .708.708l1.5-1.5a.5.5 0 0 0 0-.708");
}
</style><path class="t9gc5kz1u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fluent:text-hanging-20-regular"} {...others} />);
}

export default Component;
