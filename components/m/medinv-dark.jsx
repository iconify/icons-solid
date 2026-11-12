import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vv5t23ldk.css';
import '../../css/f/fi8hk4b8y.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vv5t23ldk"/><circle class="fi8hk4b8y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:medinv-dark"} {...others} />);
}

export default Component;
