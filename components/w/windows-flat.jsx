import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/c/c_37733vb.css';
import '../../css/z/zcl6jhbsn.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="c_37733vb"/><path clip-rule="evenodd" class="zcl6jhbsn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:windows-flat"} {...others} />);
}

export default Component;
