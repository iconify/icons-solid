import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.q59alokok {
  fill: currentColor;
  d: path("M5 1v22h14V1zm12 18H7V5h10zm-1-6h-3V8h-2v5H8l4 4z");
}
</style><path class="q59alokok"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ic:sharp-system-update"} {...others} />);
}

export default Component;
