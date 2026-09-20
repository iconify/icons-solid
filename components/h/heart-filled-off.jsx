import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.a9g9bzbof {
  fill-rule: evenodd;
  d: path("M10 4.543c-1.25-.98-2.965-1.245-4.432-.895C3.678 4.1 2 5.621 2 8.163c0 3.326 2.88 6.016 7.571 8.24a1 1 0 0 0 .857 0C15.12 14.18 18 11.49 18 8.164c0-2.542-1.678-4.064-3.568-4.515c-1.467-.35-3.183-.084-4.432.895");
}

.cuyn6tgcc {
  fill: currentColor;
}

.xedf9ccsf {
  d: path("M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z");
}
</style><g class="cuyn6tgcc"><path clip-rule="evenodd" class="a9g9bzbof"/><path class="xedf9ccsf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pop:heart-filled-off"} {...others} />);
}

export default Component;
