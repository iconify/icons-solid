import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.avm00-dxd {
  fill: currentColor;
  d: path("M13 17v-3h2v1h3v-2h-5V7h7v3h-2V9h-3v2h5v6zM4 7h7v2H6v2h4v2H6v2h5v2H4z");
}
</style><path class="avm00-dxd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:language-spanish-outline-sharp"} {...others} />);
}

export default Component;
