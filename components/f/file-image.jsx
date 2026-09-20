import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/kb5ad6bed.css';
import '../../css/r/rq1_9-wyk.css';
import '../../css/e/e5szhf2fj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="kb5ad6bed"/><path class="rq1_9-wyk"/><path class="e5szhf2fj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:file-image"} {...others} />);
}

export default Component;
