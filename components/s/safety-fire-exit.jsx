import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/w/w-cyxxb1w.css';
import '../../css/q/qjy_z_buh.css';
import '../../css/x/xquh76ahq.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="w-cyxxb1w"/><path class="qjy_z_buh"/><path class="xquh76ahq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:safety-fire-exit"} {...others} />);
}

export default Component;
