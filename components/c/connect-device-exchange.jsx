import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/r/rj6-sg7sb.css';
import '../../css/a/asamhsb1h.css';
import '../../css/f/fk0hwpbxn.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="rj6-sg7sb"/><path class="asamhsb1h"/><path class="fk0hwpbxn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:connect-device-exchange"} {...others} />);
}

export default Component;
