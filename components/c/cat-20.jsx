import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/os3wfcb2g.css';
import '../../css/d/duhv4jbxn.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="os3wfcb2g"/><path class="duhv4jbxn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cat-20"} {...others} />);
}

export default Component;
