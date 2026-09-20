import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/q/qa_v1ibag.css';
import '../../css/n/npzbi206w.css';
import '../../css/w/wnnq1tbxl.css';
import '../../css/r/ruls2nfbv.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="qa_v1ibag"/><circle class="npzbi206w"/><circle class="wnnq1tbxl"/><path class="ruls2nfbv"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"meteor-icons:paw"} {...others} />);
}

export default Component;
