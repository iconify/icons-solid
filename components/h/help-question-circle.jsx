import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/v/v6dkth_az.css';
import '../../css/k/kh_n3mb3b.css';
import '../../css/x/xaa72ccqn.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="v6dkth_az"/><path class="kh_n3mb3b"/><path class="xaa72ccqn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:help-question-circle"} {...others} />);
}

export default Component;
