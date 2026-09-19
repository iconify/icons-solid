import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vbxo4ubsn.css';

const viewBox = {"width":640,"height":512};
const content = `<path class="vbxo4ubsn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:teeth"} {...others} />);
}

export default Component;
