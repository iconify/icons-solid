import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k3nbakb9b.css';
import '../../css/l/lsid_0bha.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="k3nbakb9b"/><path class="lsid_0bha"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"geo:turf-size"} {...others} />);
}

export default Component;
