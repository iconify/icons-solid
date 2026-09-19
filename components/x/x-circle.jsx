import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t2gna1b5o.css';
import '../../css/s/sgyebwbxb.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="t2gna1b5o"/><path class="sgyebwbxb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"foundation:x-circle"} {...others} />);
}

export default Component;
