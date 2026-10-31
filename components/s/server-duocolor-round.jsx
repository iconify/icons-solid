import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/x/xzdh7zb9w.css';
import '../../css/k/kljvt7ivz.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="xzdh7zb9w"/><path class="kljvt7ivz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:server-duocolor-round"} {...others} />);
}

export default Component;
