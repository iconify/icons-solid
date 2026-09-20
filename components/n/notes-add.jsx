import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xxoqyms1v.css';
import '../../css/y/ycpresbqn.css';
import '../../css/c/cebpj_b9y.css';
import '../../css/s/s5ir6dwik.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="xxoqyms1v"/><path class="ycpresbqn"/><path class="cebpj_b9y"/><path class="s5ir6dwik"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:notes-add"} {...others} />);
}

export default Component;
