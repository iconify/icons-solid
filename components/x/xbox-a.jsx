import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/i/i8o4ou2jc.css';
import '../../css/x/xmfpfablq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="i8o4ou2jc"/><path class="xmfpfablq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:xbox-a"} {...others} />);
}

export default Component;
