import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cuyn6tgcc {
  fill: currentColor;
}

.ex-yu8bml {
  d: path("M14 4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2Z");
}

.p39fm4zsa {
  fill-opacity: var(--svg-fill-opacity--0-4, 0.4);
  d: path("M16 2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2M2 11V7a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2m6 11H4a2 2 0 0 1-1.402-.574l-.001-.001a2 2 0 0 1-.52-.874l-.001-.003A2 2 0 0 1 2 20v-4a2 2 0 0 1 2-2h4a2.003 2.003 0 0 1 2 2v4a2 2 0 0 1-2 2m3-2v-4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v4a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2");
}
</style><g class="cuyn6tgcc"><path class="p39fm4zsa"/><path class="ex-yu8bml"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:blocks-bulk"} {...others} />);
}

export default Component;
