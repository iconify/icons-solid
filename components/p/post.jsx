import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.n8k81bbwo {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 15.106c-8.665 13.15-14.873 18.232-20.856 18.127s-9.564-4.123-9.564-9.227a9.202 9.202 0 0 1 14.942-7.23M9.3 23.067a12.12 12.12 0 0 1 3.726-8.017l-8.526.056m0 0l4.799 7.993");
}

.yagyk9b-b {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.522 15.106H43.5m-15.397 1.798l-3.077 4.224a3.973 3.973 0 1 0-2.738 6.858a4.44 4.44 0 0 0 3.178-.96c1.069-.838 5.918-7.49 8.056-11.92");
}
</style><path class="yagyk9b-b"/><path class="n8k81bbwo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:post"} {...others} />);
}

export default Component;
