import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/he53c-bqp.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/daudw53wf.css';
import '../../css/y/yk0vxxa1t.css';
import '../../css/z/zjn0pubax.css';
import '../../css/y/yi1-zhbgh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="he53c-bqp secondary"/><g class="dt0cm9dhy primary"><path class="daudw53wf"/><path class="yk0vxxa1t"/><path class="zjn0pubax"/><path class="yi1-zhbgh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:cherry-duo"} {...others} />);
}

export default Component;
