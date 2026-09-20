import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/g/gip4t6bed.css';
import '../../css/g/gdhs6pexy.css';
import '../../css/n/nrxmdfbsh.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="gip4t6bed"/><path class="gdhs6pexy"/><path class="nrxmdfbsh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:water-fountain-drink"} {...others} />);
}

export default Component;
