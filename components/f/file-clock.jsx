import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/h7el7udao.css';
import '../../css/g/g017pksnm.css';
import '../../css/e/eg2568bgn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="h7el7udao"/><path class="g017pksnm"/><circle class="eg2568bgn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:file-clock"} {...others} />);
}

export default Component;
