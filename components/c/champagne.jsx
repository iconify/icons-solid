import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w49qc5hpt.css';

const viewBox = {"width":8,"height":8};
const content = `<path class="w49qc5hpt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"picon:champagne"} {...others} />);
}

export default Component;
