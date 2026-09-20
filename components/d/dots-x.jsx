import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.ehbqml5ic {
  cx: 10px;
  cy: 10px;
  r: 2px;
}

.z4qfeoj9o {
  cx: 15px;
  cy: 10px;
  r: 2px;
}

.zm0the13b {
  cx: 5px;
  cy: 10px;
  r: 2px;
}
</style><g class="cuyn6tgcc"><circle class="zm0the13b"/><circle class="ehbqml5ic"/><circle class="z4qfeoj9o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pop:dots-x"} {...others} />);
}

export default Component;
