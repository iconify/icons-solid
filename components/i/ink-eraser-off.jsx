import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.uavjzkako {
  fill: currentColor;
  d: path("M19.775 22.625L15.05 17.9L13 20H4.75l-2.125-2.125q-.575-.575-.587-1.425T2.6 15l4.7-4.85l-5.925-5.925L2.8 2.8l18.4 18.4zm-1.9-7.6L10.1 7.25l3.5-3.65q.575-.6 1.413-.6t1.412.575L21.4 8.55q.575.575.575 1.425T21.4 11.4z");
}
</style><path class="uavjzkako"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:ink-eraser-off"} {...others} />);
}

export default Component;
