import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.m02n2n2dd {
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  d: path("M33.9 38.7c0-16.237-13.163-29.4-29.4-29.4v9.6c10.935 0 19.8 8.865 19.8 19.8zm0-29.4h9.6v29.4h-9.6z");
}
</style><path class="m02n2n2dd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:viggo"} {...others} />);
}

export default Component;
