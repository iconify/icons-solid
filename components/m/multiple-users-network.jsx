import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/q/qi4hsab1t.css';
import '../../css/p/pzuykqb0c.css';
import '../../css/q/qnx-s6bsi.css';
import '../../css/p/pqpdl9r_m.css';
import '../../css/b/bmq8--bgj.css';
import '../../css/w/webn35bty.css';
import '../../css/j/jgozmtnvf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="qi4hsab1t"/><path class="pzuykqb0c"/><path class="qnx-s6bsi"/><path class="pqpdl9r_m"/><path class="bmq8--bgj"/><path class="webn35bty"/><path class="jgozmtnvf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:multiple-users-network"} {...others} />);
}

export default Component;
