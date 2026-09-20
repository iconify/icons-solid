import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.o3easlsll {
  fill: currentColor;
  d: path("M10 22V10h12v12zm-4-4V6h12v2H8v10zm-4-4V2h12v2H4v10z");
}
</style><path class="o3easlsll"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols:auto-awesome-motion-sharp"} {...others} />);
}

export default Component;
