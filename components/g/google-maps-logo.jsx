import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/i/iqfudrb2n.css';
import '../../css/m/mzehp1zbt.css';
import '../../css/t/tycficb6d.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="iqfudrb2n"/><path class="mzehp1zbt"/><path class="tycficb6d"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:google-maps-logo"} {...others} />);
}

export default Component;
