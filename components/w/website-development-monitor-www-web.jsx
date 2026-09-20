import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/o/o9_yfztdo.css';
import '../../css/n/nkgvlpo6l.css';
import '../../css/b/bjr3rwbuf.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="o9_yfztdo"/><path class="nkgvlpo6l"/><path class="bjr3rwbuf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:website-development-monitor-www-web"} {...others} />);
}

export default Component;
