import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/n/n4v2kwb_q.css';
import '../../css/i/izo4pibwp.css';
import '../../css/a/au9wb8bvv.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="n4v2kwb_q"/><path class="izo4pibwp"/><path class="au9wb8bvv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:performance-increase-clipboard"} {...others} />);
}

export default Component;
