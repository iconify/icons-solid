import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/ccdyqxb_a.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="ccdyqxb_a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"healthicons:hospital-symbol"} {...others} />);
}

export default Component;
