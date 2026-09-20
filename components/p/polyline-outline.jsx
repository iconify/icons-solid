import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.oqn3sebin {
  fill: currentColor;
  d: path("M15 22v-2.5L8 16H3v-6h4.3L10 6.9V2h6v6h-4.3L9 11.1v3.15l6 3V16h6v6zM12 6h2V4h-2zm-7 8h2v-2H5zm12 6h2v-2h-2zm1-1");
}
</style><path class="oqn3sebin"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:polyline-outline"} {...others} />);
}

export default Component;
