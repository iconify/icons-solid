import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oqf5vsmca.css';
import '../../css/d/ddaib_rgx.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="oqf5vsmca"/><path class="ddaib_rgx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:cloud-download"} {...others} />);
}

export default Component;
