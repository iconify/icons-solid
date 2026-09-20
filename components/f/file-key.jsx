import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/x_rvzyb1l.css';
import '../../css/f/fqgjkac1o.css';
import '../../css/q/qtxsezbbm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="x_rvzyb1l"/><path class="fqgjkac1o"/><circle class="qtxsezbbm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:file-key"} {...others} />);
}

export default Component;
