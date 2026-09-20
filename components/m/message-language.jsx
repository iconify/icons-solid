import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/k/k1i6g_bkz.css';
import '../../css/m/m_1p5wbpc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><path class="k1i6g_bkz"/><path class="m_1p5wbpc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:message-language"} {...others} />);
}

export default Component;
