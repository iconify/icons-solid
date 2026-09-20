import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/e1i-fu7vn.css';
import '../../css/y/y5w19acgb.css';

const viewBox = {"width":16,"height":16};
const content = `<path clip-rule="evenodd" class="e1i-fu7vn"/><path class="y5w19acgb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"oui:token-completion-suggester"} {...others} />);
}

export default Component;
