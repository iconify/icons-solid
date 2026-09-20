import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a_xui1bqs.css';
import '../../css/u/u8q_ug4pj.css';
import '../../css/e/e6sjhzbvx.css';

const viewBox = {"width":20,"height":20};
const content = `<path class="a_xui1bqs"/><circle class="u8q_ug4pj"/><circle class="e6sjhzbvx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ooui:tabs-ltr"} {...others} />);
}

export default Component;
