import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/m/mfdlwlicq.css';
import '../../css/x/xq6qcpb4u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="mfdlwlicq"/><path class="xq6qcpb4u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ci:radio-fill"} {...others} />);
}

export default Component;
