import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g8sexbcsc.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/b/bmrn8acqb.css';
import '../../css/l/lww7c4bwc.css';
import '../../css/x/xbqzh6bgi.css';
import '../../css/s/smie_ib3h.css';
import '../../css/q/qso6odhhx.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g8sexbcsc secondary"/><g class="dt0cm9dhy primary"><path class="bmrn8acqb"/><path class="lww7c4bwc"/><path class="xbqzh6bgi"/><path class="smie_ib3h"/><path class="qso6odhhx"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:gate-nor-duo"} {...others} />);
}

export default Component;
