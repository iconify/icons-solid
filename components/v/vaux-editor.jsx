import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.j1n_90bkg {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m24 28.71l8.646-20.854a3.82 3.82 0 0 1 7.055 2.925L27.527 40.143");
}

.us8cyeb-l {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M24.001 42.5a3.82 3.82 0 0 1-3.528-2.357L8.299 10.781a3.82 3.82 0 0 1 7.055-2.925l12.173 29.362a3.82 3.82 0 0 1-3.526 5.282");
}
</style><path class="us8cyeb-l"/><path class="j1n_90bkg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:vaux-editor"} {...others} />);
}

export default Component;
