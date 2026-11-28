import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qqjcqq0dr.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/z/z89jkdb_z.css';
import '../../css/j/jqjybu5du.css';
import '../../css/r/rqhxtipmw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qqjcqq0dr secondary"/><g class="dt0cm9dhy primary"><path class="z89jkdb_z"/><path class="jqjybu5du"/><path class="rqhxtipmw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:input-cursor-duo"} {...others} />);
}

export default Component;
