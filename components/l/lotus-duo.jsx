import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/m/mcdvi2neo.css';
import '../../css/n/nxv30fvri.css';
import '../../css/q/qc-utcwpa.css';
import '../../css/x/xslfg2evh.css';
import '../../css/i/i2qnw-bhf.css';
import '../../css/i/iayt--bmg.css';
import '../../css/v/vvd7iabnl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="mcdvi2neo"/><path class="nxv30fvri"/><path class="qc-utcwpa wm-a"/><path class="wm-s xslfg2evh"/><path class="i2qnw-bhf"/><path class="iayt--bmg"/><path class="vvd7iabnl wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:lotus-duo"} {...others} />);
}

export default Component;
