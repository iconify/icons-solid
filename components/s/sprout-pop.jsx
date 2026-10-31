import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/m/m6s_mu8dx.css';
import '../../css/t/tghbsxb2y.css';
import '../../css/t/t29xqohbu.css';
import '../../css/d/d6tamrpjr.css';
import '../../css/b/by558jenf.css';
import '../../css/v/v8d_u1bql.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="m6s_mu8dx"/><path class="tghbsxb2y"/><path clip-rule="evenodd" class="t29xqohbu"/><path class="d6tamrpjr"/><path clip-rule="evenodd" class="by558jenf"/><path class="v8d_u1bql"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:sprout-pop"} {...others} />);
}

export default Component;
