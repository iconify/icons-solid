import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xmgj-ltpl.css';
import '../../css/m/mp9eqybsi.css';
import '../../css/c/c0-nyjt-p.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="xmgj-ltpl"/><path class="mp9eqybsi"/><path class="c0-nyjt-p"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:volume-control-medium-1"} {...others} />);
}

export default Component;
