import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/q/q_sgc5ccm.css';
import '../../css/t/tnt2-yler.css';
import '../../css/r/rpvb5zbto.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="q_sgc5ccm"/><path class="tnt2-yler"/><path class="rpvb5zbto"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:form-edition-image-attach"} {...others} />);
}

export default Component;
