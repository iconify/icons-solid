import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nda5gnl9j.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="nda5gnl9j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:copy-point"} {...others} />);
}

export default Component;
