import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":48,"height":48};
const content = `<style>.id_xqob9r {
  cx: 29.346px;
  cy: 24px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 3.811px;
  ry: 20.858px;
}

.md2n_-0un {
  cx: 17.699px;
  cy: 24.863px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 19.021px;
  ry: 4.131px;
}

.mt_rwxbjg {
  cx: 24.521px;
  cy: 26.263px;
  fill: none;
  stroke: currentColor;
  stroke-linecap: round;
  stroke-linejoin: round;
  rx: 3.784px;
  ry: 16.247px;
}
</style><ellipse transform="rotate(-60.255 17.699 24.864)" class="md2n_-0un"/><ellipse transform="rotate(-28.03 29.346 24)" class="id_xqob9r"/><ellipse transform="rotate(-77.427 24.52 26.263)" class="mt_rwxbjg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"arcticons:arriva"} {...others} />);
}

export default Component;
