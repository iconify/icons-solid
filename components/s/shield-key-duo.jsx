import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jxeoqfl9v.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/j/j2vbli9go.css';
import '../../css/j/jzu4mk7px.css';
import '../../css/p/pbup9yb2f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="jxeoqfl9v secondary"/><g class="dt0cm9dhy primary"><path class="j2vbli9go"/><path class="jzu4mk7px"/><path class="pbup9yb2f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:shield-key-duo"} {...others} />);
}

export default Component;
