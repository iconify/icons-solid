import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/g/g74vzqvdz.css';
import '../../css/v/vselo_bxr.css';
import '../../css/a/ang81xbkn.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="g74vzqvdz"/><path class="vselo_bxr"/><path class="ang81xbkn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:desktop-action-monitor-edit"} {...others} />);
}

export default Component;
