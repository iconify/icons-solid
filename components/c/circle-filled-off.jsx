import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.bi3kv_gql {
  d: path("M16.5 10a6.5 6.5 0 1 1-13 0a6.5 6.5 0 0 1 13 0");
}

.cuyn6tgcc {
  fill: currentColor;
}

.xedf9ccsf {
  d: path("M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z");
}
</style><g class="cuyn6tgcc"><path class="bi3kv_gql"/><path class="xedf9ccsf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pop:circle-filled-off"} {...others} />);
}

export default Component;
