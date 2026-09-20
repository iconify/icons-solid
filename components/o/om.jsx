import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/e/e3lqd12op.css';
import '../../css/p/pceezlbkz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="e3lqd12op"/><path class="pceezlbkz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:om"} {...others} />);
}

export default Component;
