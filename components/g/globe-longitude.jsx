import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/n/ny8eibbpn.css';
import '../../css/h/h4qhcub-h.css';
import '../../css/g/gosi5qmfm.css';
import '../../css/v/vuqpi_ioo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle transform="rotate(90 12 12)" class="ny8eibbpn"/><circle transform="rotate(90 12 12)" class="h4qhcub-h"/><ellipse transform="rotate(90 12 12)" class="gosi5qmfm"/><path class="vuqpi_ioo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:globe-longitude"} {...others} />);
}

export default Component;
