import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/r/rc4xfv36q.css';
import '../../css/t/t5pka63op.css';
import '../../css/f/fnmgaj5ib.css';
import '../../css/s/sdm_mab_v.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="rc4xfv36q"/><path class="t5pka63op"/><path class="fnmgaj5ib"/><path class="sdm_mab_v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:voice-id-user"} {...others} />);
}

export default Component;
