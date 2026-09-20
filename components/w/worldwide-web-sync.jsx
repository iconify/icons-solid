import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/r2b2pkzbu.css';
import '../../css/x/xok9hibro.css';
import '../../css/o/opba08xww.css';
import '../../css/j/jtg-hpg4n.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="r2b2pkzbu"/><path class="xok9hibro"/><path class="opba08xww"/><path class="jtg-hpg4n"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:worldwide-web-sync"} {...others} />);
}

export default Component;
