import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/d/d_strccwq.css';
import '../../css/p/ppniq-bxf.css';
import '../../css/n/nk7a4nakq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="d_strccwq"/><path class="ppniq-bxf"/><path class="nk7a4nakq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:application-add"} {...others} />);
}

export default Component;
