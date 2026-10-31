import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/v/v6dd933zq.css';
import '../../css/q/qp00v-bvn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="v6dd933zq"/><path class="qp00v-bvn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:bell-duocolor-round"} {...others} />);
}

export default Component;
