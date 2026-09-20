import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/u/u3ec4bzgr.css';
import '../../css/x/x85vpacqs.css';
import '../../css/a/afbnp2aqw.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="u3ec4bzgr"/><path class="x85vpacqs"/><path class="afbnp2aqw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:responsive-design-monitor-phone"} {...others} />);
}

export default Component;
