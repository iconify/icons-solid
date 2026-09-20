import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/x/xcql_hb4y.css';
import '../../css/c/chk807gyz.css';
import '../../css/m/mz5j7acld.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="n1lsf0bnc"><path class="xcql_hb4y"/><path class="chk807gyz"/><path class="mz5j7acld"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:tablet-application"} {...others} />);
}

export default Component;
