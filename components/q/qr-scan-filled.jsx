import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gvaaipbio.css';
import '../../css/v/vy6884uyz.css';
import '../../css/j/jjrkjtb3x.css';
import '../../css/h/hj6wm5bry.css';
import '../../css/q/quzn65tbh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gvaaipbio"/><rect class="vy6884uyz"/><rect class="jjrkjtb3x"/><rect class="hj6wm5bry"/><path class="quzn65tbh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:qr-scan-filled"} {...others} />);
}

export default Component;
