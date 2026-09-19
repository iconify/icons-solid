import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.kdo6u4bhv {
  width: 7.68px;
  height: 24.721px;
  x: 6.5px;
  y: 16.572px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2.327px;
}

.kqkiv7bzq {
  width: 7.68px;
  height: 15.244px;
  x: 33.821px;
  y: 26.049px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2.327px;
}

.x7zto92vq {
  width: 7.68px;
  height: 34.586px;
  x: 20.16px;
  y: 6.707px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 2.327px;
}
</style><rect class="x7zto92vq"/><rect class="kqkiv7bzq"/><rect class="kdo6u4bhv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:spotistats"} {...others} />);
}

export default Component;
