import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/z/z6gc64byl.css';
import '../../css/a/afkv757cy.css';
import '../../css/x/xhhh0v1_e.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="z6gc64byl"/><path class="afkv757cy"/><path class="xhhh0v1_e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:safety-danger-mudslide"} {...others} />);
}

export default Component;
