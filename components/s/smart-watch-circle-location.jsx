import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/j/jqqgpou1b.css';
import '../../css/r/rxm4e15li.css';
import '../../css/h/h4kcnxt2y.css';
import '../../css/q/qla2qka_g.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="jqqgpou1b"/><path class="rxm4e15li"/><path class="h4kcnxt2y"/><path class="qla2qka_g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:smart-watch-circle-location"} {...others} />);
}

export default Component;
