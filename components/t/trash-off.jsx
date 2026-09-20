import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.ab7txzbjk {
  d: path("M4.5 5.5a1 1 0 0 1 0-2h11a1 1 0 1 1 0 2z");
}

.cuyn6tgcc {
  fill: currentColor;
}

.j6ace1oqn {
  fill-rule: evenodd;
  d: path("M14.5 18.5a1 1 0 0 0 1-1V7a1 1 0 0 0-1-1h-9a1 1 0 0 0-1 1v10.5a1 1 0 0 0 1 1zm-2-10a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0zM10 8a.5.5 0 0 0-.5.5v7a.5.5 0 0 0 1 0v-7A.5.5 0 0 0 10 8m-3.5.5a.5.5 0 0 1 1 0v7a.5.5 0 0 1-1 0z");
}

.rbe5wf74a {
  d: path("M11.937 4.5H8.062A2.003 2.003 0 0 1 10 2a2.003 2.003 0 0 1 1.937 2.5");
}

.xedf9ccsf {
  d: path("M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z");
}
</style><g class="cuyn6tgcc"><path class="rbe5wf74a"/><path class="ab7txzbjk"/><path clip-rule="evenodd" class="j6ace1oqn"/><path class="xedf9ccsf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pop:trash-off"} {...others} />);
}

export default Component;
