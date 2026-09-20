import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/d/deeqkxq_k.css';
import '../../css/c/cq1x7ibme.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="deeqkxq_k"/><path class="cq1x7ibme"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:mail-off"} {...others} />);
}

export default Component;
