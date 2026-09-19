import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.i2h9-4bpt {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M23.6 20.46a8.62 8.62 0 1 1-8.6 8.62a8.62 8.62 0 0 1 8.6-8.62m.1 8.62l-4.67 4.56m4.67-10.07v5.51");
}

.zkxz_20sb {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M43.5 20.43a2 2 0 0 0-2-2h-35a2 2 0 0 0-2 2v17.3a2 2 0 0 0 2 2h35a2 2 0 0 0 2-2ZM24 9.41a9 9 0 0 1 9 9H15a9 9 0 0 1 9-9");
}
</style><path class="zkxz_20sb"/><path class="i2h9-4bpt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:trackworktime"} {...others} />);
}

export default Component;
