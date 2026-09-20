import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/i/ilef90r2i.css';
import '../../css/g/gp2un2bwc.css';
import '../../css/m/m6eplnbnj.css';

const viewBox = {"width":14,"height":14};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="ilef90r2i"/><path class="gp2un2bwc"/><path class="m6eplnbnj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:keyboard-flat"} {...others} />);
}

export default Component;
