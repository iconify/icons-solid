import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/u/u9vzwo86x.css';
import '../../css/x/x3cpas5as.css';
import '../../css/v/vbfgb0gup.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="u9vzwo86x"/><path class="x3cpas5as"/><path class="vbfgb0gup"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:suit"} {...others} />);
}

export default Component;
