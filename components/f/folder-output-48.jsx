import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uobcpjbvq.css';
import '../../css/r/rogied72y.css';
import '../../css/t/tpcfugidh.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="uobcpjbvq"/><path class="rogied72y"/><path class="tpcfugidh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:folder-output-48"} {...others} />);
}

export default Component;
