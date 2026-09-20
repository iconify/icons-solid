import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';

const viewBox = {"width":24,"height":24};
const content = `<style>.crd57u6lx {
  fill: currentColor;
  d: path("M3 19V5h18v14zm6-1h11V6H9zm-1 0V6H4v12zm-4 0V6zm4 0h1zM8 6h1z");
}
</style><path class="crd57u6lx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-symbols-light:thumbnail-bar-outline-sharp"} {...others} />);
}

export default Component;
