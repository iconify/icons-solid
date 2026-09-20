import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.p0pri2oaf {
  fill-rule: evenodd;
  d: path("M10 12.998L14.037 6H5.963zm-.866 2.5a1 1 0 0 0 1.732 0L16.635 5.5a1 1 0 0 0-.866-1.5H4.23a1 1 0 0 0-.866 1.5z");
}

.xedf9ccsf {
  d: path("M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z");
}
</style><g class="cuyn6tgcc"><path clip-rule="evenodd" class="p0pri2oaf"/><path class="xedf9ccsf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pop:triangle-down-off"} {...others} />);
}

export default Component;
