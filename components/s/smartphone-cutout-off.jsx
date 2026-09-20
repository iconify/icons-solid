import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.d2kvgvbvc {
  fill-rule: evenodd;
}

.qx0owhb7f {
  d: path("M14.5 0h-9a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h9a2 2 0 0 0 2-2V2a2 2 0 0 0-2-2m-9 18V2h9v16z");
}

.rr6x40bzj {
  d: path("M7.5 3.5a1 1 0 0 1 1-1h3a1 1 0 1 1 0 2h-3a1 1 0 0 1-1-1");
}

.xedf9ccsf {
  d: path("M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z");
}
</style><g class="cuyn6tgcc"><g clip-rule="evenodd" class="d2kvgvbvc"><path class="qx0owhb7f"/><path class="rr6x40bzj"/></g><path class="xedf9ccsf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pop:smartphone-cutout-off"} {...others} />);
}

export default Component;
