import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.cmfk4ybyx {
  fill: currentColor;
  d: path("M14 17H3V7h18v3h-2V9H5v6h9zm-9-2V9zm14 5v-3h-3v-2h3v-3h2v3h3v2h-3v3z");
}
</style><path class="cmfk4ybyx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:variable-add-outline"} {...others} />);
}

export default Component;
