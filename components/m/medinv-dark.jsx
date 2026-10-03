import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vv5t23ldk.css';
import '../../css/o/oqpqr4qja.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="vv5t23ldk"/><circle class="oqpqr4qja"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:medinv-dark"} {...others} />);
}

export default Component;
