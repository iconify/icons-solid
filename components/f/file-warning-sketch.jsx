import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/s/sc7vf9bsj.css';
import '../../css/o/oh6yrebxg.css';
import '../../css/q/qbjvmhoys.css';
import '../../css/s/svm9pnbzs.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="sc7vf9bsj"/><path class="oh6yrebxg wm-a"/><path class="qbjvmhoys wm-k"/><path class="svm9pnbzs wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:file-warning-sketch"} {...others} />);
}

export default Component;
