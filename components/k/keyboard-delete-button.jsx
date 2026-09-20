import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/w/w0mp90b1v.css';
import '../../css/s/sv05mfuxd.css';
import '../../css/d/d_ldgic0f.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="w0mp90b1v"/><path class="sv05mfuxd"/><path class="d_ldgic0f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:keyboard-delete-button"} {...others} />);
}

export default Component;
