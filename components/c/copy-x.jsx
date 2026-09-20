import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/g/gsc5ntbis.css';
import '../../css/q/qc04b_ugy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="gsc5ntbis"/><path class="qc04b_ugy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:copy-x"} {...others} />);
}

export default Component;
