import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/b/ba4_qcapu.css';
import '../../css/e/ej3v9zbgs.css';
import '../../css/u/usqq9cbfw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path clip-rule="evenodd" class="ba4_qcapu"/><path class="ej3v9zbgs"/><path class="usqq9cbfw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:book-check-fill"} {...others} />);
}

export default Component;
