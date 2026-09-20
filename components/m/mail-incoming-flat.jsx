import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/m/m_dkvxy7f.css';
import '../../css/m/m91w3qb8n.css';
import '../../css/u/u4-0twl4u.css';

const viewBox = {"width":14,"height":14};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="m_dkvxy7f"/><path class="m91w3qb8n"/><path class="u4-0twl4u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-color:mail-incoming-flat"} {...others} />);
}

export default Component;
