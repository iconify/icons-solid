import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.php1gybtd {
  fill: currentColor;
  d: path("M11 14.5h5v-9h-5v1h4v3h-2.384v1H15v3h-4zM6.5 17V3h14v14zm-3 3V6.616h1V19h12.385v1z");
}
</style><path class="php1gybtd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:filter-3-sharp"} {...others} />);
}

export default Component;
