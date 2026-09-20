import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/bglxcs25n.css';
import '../../css/m/m1lvslblz.css';
import '../../css/t/titfr9bqt.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="bglxcs25n"/><path clip-rule="evenodd" class="m1lvslblz"/><path clip-rule="evenodd" class="titfr9bqt"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:lock-comment-security-flat"} {...others} />);
}

export default Component;
