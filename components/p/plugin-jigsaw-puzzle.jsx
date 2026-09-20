import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/i/izpkp1b1n.css';
import '../../css/y/yprxtg4ex.css';
import '../../css/v/vw141hbiq.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="izpkp1b1n"/><path class="yprxtg4ex"/><path class="vw141hbiq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:plugin-jigsaw-puzzle"} {...others} />);
}

export default Component;
