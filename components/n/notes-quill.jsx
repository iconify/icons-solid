import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/k/kyoivpb1v.css';
import '../../css/y/y84sanbev.css';
import '../../css/s/s_ax9mbxh.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="kyoivpb1v"/><path class="y84sanbev"/><path class="s_ax9mbxh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:notes-quill"} {...others} />);
}

export default Component;
