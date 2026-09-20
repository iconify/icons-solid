import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/q/q6jbiqb9i.css';
import '../../css/i/ibz4ckbnw.css';
import '../../css/l/lymq3jdhi.css';
import '../../css/p/pq3vrqqiu.css';
import '../../css/x/x-t_ist5h.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="q6jbiqb9i"/><path class="ibz4ckbnw"/><path class="lymq3jdhi"/><path class="pq3vrqqiu"/><path class="x-t_ist5h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:email-action-sync-1"} {...others} />);
}

export default Component;
