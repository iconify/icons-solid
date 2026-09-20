import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/x/xsxyw_szs.css';
import '../../css/o/ouxwt8bby.css';
import '../../css/p/pyr87bb_l.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="xsxyw_szs"/><path class="ouxwt8bby"/><path class="pyr87bb_l"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:picture-polaroid-hide"} {...others} />);
}

export default Component;
