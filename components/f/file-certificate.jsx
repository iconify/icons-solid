import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/h/hqcq3__zz.css';
import '../../css/x/xt7nfjbpa.css';
import '../../css/o/ofmfvdb4i.css';
import '../../css/d/drv1fzrxu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="hqcq3__zz"/><path class="xt7nfjbpa"/><path class="ofmfvdb4i"/><path class="drv1fzrxu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:file-certificate"} {...others} />);
}

export default Component;
