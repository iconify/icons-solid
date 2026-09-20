import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/s/sczk89p9c.css';
import '../../css/h/hu7lz1x8l.css';
import '../../css/w/w493op95g.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="sczk89p9c"/><path class="hu7lz1x8l"/><path class="w493op95g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:form-edition-clipboard"} {...others} />);
}

export default Component;
