import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/n/no-cdxbss.css';
import '../../css/b/blqx9nbej.css';
import '../../css/e/ewa20qhlh.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="no-cdxbss"/><path class="blqx9nbej"/><path class="ewa20qhlh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:laptop-action-lock"} {...others} />);
}

export default Component;
