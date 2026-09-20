import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kdrm33fiz.css';
import '../../css/w/we0aawlvd.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="kdrm33fiz"/><path class="we0aawlvd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"material-icon-theme:folder-components-open"} {...others} />);
}

export default Component;
