import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/k/kfp3c8bsz.css';
import '../../css/c/ct5w8kbba.css';
import '../../css/t/tkrpcdone.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="kfp3c8bsz"/><path class="ct5w8kbba"/><path class="tkrpcdone"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:file-sparkles"} {...others} />);
}

export default Component;
