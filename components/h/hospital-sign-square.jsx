import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jqax-6b-d.css';
import '../../css/m/m7x1a70ua.css';
import '../../css/x/xyu3ddcdi.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="jqax-6b-d"><path class="m7x1a70ua"/><path class="xyu3ddcdi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:hospital-sign-square"} {...others} />);
}

export default Component;
