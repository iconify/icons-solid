import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pdk2_smhe.css';

const viewBox = {"width":15,"height":15};
const content = `<path class="pdk2_smhe"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"teenyicons:align-center-horizontal-outline"} {...others} />);
}

export default Component;
