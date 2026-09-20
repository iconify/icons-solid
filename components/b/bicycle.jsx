import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/x/xbpad4b7b.css';
import '../../css/m/mgyq-dbbb.css';
import '../../css/x/x_rkz67op.css';
import '../../css/a/ar386rvvj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="xbpad4b7b"/><path class="mgyq-dbbb"/><path class="x_rkz67op"/><path class="ar386rvvj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:bicycle"} {...others} />);
}

export default Component;
