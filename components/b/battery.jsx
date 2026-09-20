import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.xwhj4xbwf {
  width: 2px;
  height: 5px;
  x: 17px;
  y: 7.5px;
  rx: 0.5px;
}

.yhxyf4f2m {
  fill-rule: evenodd;
  d: path("M14 4.5H4a3 3 0 0 0-3 3v5a3 3 0 0 0 3 3h10a3 3 0 0 0 3-3v-5a3 3 0 0 0-3-3m-11 3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v5a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1z");
}

.yyulwlb7u {
  d: path("M4 7.5h3v5H4zm3.5 0h3v5h-3zm3.5 0h3v5h-3z");
}
</style><g class="cuyn6tgcc"><rect class="xwhj4xbwf"/><path class="yyulwlb7u"/><path clip-rule="evenodd" class="yhxyf4f2m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pop:battery"} {...others} />);
}

export default Component;
