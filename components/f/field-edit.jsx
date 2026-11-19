import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/j/j139cfbaq.css';
import '../../css/c/cdl-x_lmo.css';
import '../../css/z/zbeat-bpl.css';
import '../../css/c/cjzvwubng.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="j139cfbaq"/><path class="cdl-x_lmo"/><path clip-rule="evenodd" class="zbeat-bpl"/><path class="cjzvwubng"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:field-edit"} {...others} />);
}

export default Component;
