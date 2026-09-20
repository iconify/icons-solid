import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/g7v7z11sx.css';
import '../../css/v/vljgd4n0p.css';
import '../../css/c/cxlg3vl1a.css';
import '../../css/i/ifaz70qgs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="g7v7z11sx"/><path class="vljgd4n0p"/><path class="cxlg3vl1a"/><path class="ifaz70qgs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:common-file-edit"} {...others} />);
}

export default Component;
