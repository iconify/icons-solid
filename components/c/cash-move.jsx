import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/s/spqcbsbpc.css';
import '../../css/y/yqd-c3bzp.css';
import '../../css/l/ltmz0zm2k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="spqcbsbpc"/><path class="yqd-c3bzp"/><path class="ltmz0zm2k"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:cash-move"} {...others} />);
}

export default Component;
