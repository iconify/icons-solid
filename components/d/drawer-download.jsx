import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/f/f1vu3gb0c.css';
import '../../css/h/hbnlznkbn.css';
import '../../css/p/paxlopbiy.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="f1vu3gb0c"/><path class="hbnlznkbn"/><path class="paxlopbiy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:drawer-download"} {...others} />);
}

export default Component;
