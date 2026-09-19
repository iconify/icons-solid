import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.woq12faej {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m31.941 16.063l-3.97 15.876l-3.968-15.877l-3.97 15.876l-3.969-15.875m18.955 16.459H5.5M9.5 5.5h29.001A3.99 3.99 0 0 1 42.5 9.485V38.5a3.99 3.99 0 0 1-3.98 4H9.501a3.99 3.99 0 0 1-4-3.98V9.5a3.99 3.99 0 0 1 3.983-4z");
}
</style><path class="woq12faej"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:whoosh"} {...others} />);
}

export default Component;
