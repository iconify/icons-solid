import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.jndrpccpb {
  fill: currentColor;
  d: path("M4 3a1 1 0 0 1 1-1h14a1 1 0 0 1 1 1v3h1a1 1 0 0 1 1 1v12a1 1 0 0 1-1 1h-2v1a1 1 0 0 1-2 0v-1H7v1a1 1 0 0 1-2 0v-1H3a1 1 0 0 1-1-1V7a1 1 0 0 1 1-1h1Zm14 3V4H6v2Zm-9.586 6l1.293-1.293a.999.999 0 1 0-1.414-1.414l-3 3A1 1 0 0 0 6 14h1.586l-1.293 1.293a.999.999 0 1 0 1.414 1.414l3-3A1 1 0 0 0 10 12ZM17 10h-3a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2m-3 4a1 1 0 0 0 0 2h3a1 1 0 0 0 0-2Z");
}
</style><path class="jndrpccpb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:generator-fill-sharp"} {...others} />);
}

export default Component;
