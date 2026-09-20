import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/m9fwsab7y.css';
import '../../css/a/ag-f_yw_g.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="m9fwsab7y"/><path class="ag-f_yw_g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"keyline-icons:scan-qr-code-fill"} {...others} />);
}

export default Component;
