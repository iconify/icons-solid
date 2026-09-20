import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yetj49bbr.css';
import '../../css/c/cad3x_r9s.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="yetj49bbr"/><path class="cad3x_r9s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:file-badge-16"} {...others} />);
}

export default Component;
