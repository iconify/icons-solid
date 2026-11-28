import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/l/l24zqccfl.css';
import '../../css/q/qiuzifbed.css';
import '../../css/q/q6vbnacif.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="l24zqccfl"/><path class="qiuzifbed"/><path class="q6vbnacif"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:lamp-desk"} {...others} />);
}

export default Component;
