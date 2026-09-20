import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":20,"height":20};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.k8fiy6bnz {
  d: path("m15.374 5.986l-5 9c-.647 1.165-2.396.194-1.748-.972l5-9c.647-1.165 2.396-.194 1.748.972");
}

.p0khxqb6k {
  d: path("m5.125 9.72l5 4c1.04.832-.209 2.394-1.25 1.56l-5-4c-1.04-.832.209-2.394 1.25-1.56M1.293 2.707a1 1 0 0 1 1.414-1.414l16 16a1 1 0 0 1-1.414 1.414z");
}
</style><g class="cuyn6tgcc"><path class="k8fiy6bnz"/><path class="p0khxqb6k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pepicons-pop:checkmark-off"} {...others} />);
}

export default Component;
