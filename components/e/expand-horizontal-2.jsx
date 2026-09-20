import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/v/v_sktebsl.css';
import '../../css/y/yjkqsgo0c.css';
import '../../css/z/zb6qufdes.css';
import '../../css/z/zcgdsob3e.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="v_sktebsl"/><path class="yjkqsgo0c"/><path class="zb6qufdes"/><path class="zcgdsob3e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:expand-horizontal-2"} {...others} />);
}

export default Component;
