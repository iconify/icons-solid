import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fw-0snbeq.css';
import '../../css/z/zxh8vllwu.css';
import '../../css/t/tfwvdwbxo.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="fw-0snbeq"/><path class="ouiIcon__fillSecondary zxh8vllwu"/><path class="tfwvdwbxo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:app-console"} {...others} />);
}

export default Component;
