import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/m/mjbq1k7ia.css';
import '../../css/q/qrbzj1bmk.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="mjbq1k7ia"/><path class="qrbzj1bmk"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:moon"} {...others} />);
}

export default Component;
