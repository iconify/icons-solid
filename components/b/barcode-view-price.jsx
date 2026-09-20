import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/m/mgj_-5kho.css';
import '../../css/t/twkjmwb_m.css';
import '../../css/o/oghttxkxd.css';

const viewBox = {"width":24,"height":24};
const content = `<g clip-rule="evenodd" class="bi12bsetm"><path class="mgj_-5kho"/><path class="twkjmwb_m"/><path class="oghttxkxd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:barcode-view-price"} {...others} />);
}

export default Component;
