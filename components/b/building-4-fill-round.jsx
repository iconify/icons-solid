import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.g6p0izbuj {
  fill: currentColor;
  d: path("M3 21a1 1 0 0 1 0-2h1V8a5 5 0 0 1 5-5h2a5 5 0 0 1 5 5v.099A5.01 5.01 0 0 1 20 13v6h1a1 1 0 0 1 0 2ZM9 9h2a1 1 0 0 0 0-2H9a1 1 0 0 0 0 2m9 10v-6a3 3 0 0 0-2-2.83V19Zm-9-6h2a1 1 0 0 0 0-2H9a1 1 0 0 0 0 2");
}
</style><path class="g6p0izbuj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:building-4-fill-round"} {...others} />);
}

export default Component;
