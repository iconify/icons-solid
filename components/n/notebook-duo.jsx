import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gj3gkuzfe.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/q/qr_-isbgg.css';
import '../../css/c/c5__r9abd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gj3gkuzfe secondary"/><g class="dt0cm9dhy primary"><path class="qr_-isbgg"/><path class="c5__r9abd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:notebook-duo"} {...others} />);
}

export default Component;
