import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.h3nm9fb1f {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m15.303 37.463l25.069-6.172a4.11 4.11 0 0 0 2.784-5.63l-3.378-7.753a7.91 7.91 0 0 0-6.405-4.705l-25.86-2.785a2.72 2.72 0 0 0-2.93 3.367l5.1 20.296a4.65 4.65 0 0 0 5.62 3.382");
}

.np---dzum {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("m19.977 18.577l11.549 3.31l-9.05 7.024");
}
</style><path class="h3nm9fb1f"/><path class="np---dzum"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:pure-tuber"} {...others} />);
}

export default Component;
