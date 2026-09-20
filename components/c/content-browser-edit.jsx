import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/a/ariqabb3m.css';
import '../../css/p/p3xi1cbyh.css';
import '../../css/h/hcf_tsbst.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="ariqabb3m"/><path class="p3xi1cbyh"/><path class="hcf_tsbst"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:content-browser-edit"} {...others} />);
}

export default Component;
