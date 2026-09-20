import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/j/jmtfnlb2v.css';
import '../../css/q/qt6ua231o.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="jmtfnlb2v"/><path class="qt6ua231o"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:timeline"} {...others} />);
}

export default Component;
