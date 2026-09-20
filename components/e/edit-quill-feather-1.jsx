import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/v/vk02_tbbo.css';
import '../../css/a/aa9r_5b7w.css';
import '../../css/x/x2p_89n_s.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="vk02_tbbo"/><path class="aa9r_5b7w"/><path class="x2p_89n_s"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:edit-quill-feather-1"} {...others} />);
}

export default Component;
