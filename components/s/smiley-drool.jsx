import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/b/bsh15bben.css';
import '../../css/y/y8n4yt1ck.css';
import '../../css/y/yjsjycc6p.css';
import '../../css/b/bdrkfzx2p.css';
import '../../css/a/a76rq6xbp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="bsh15bben"/><path class="y8n4yt1ck"/><path class="yjsjycc6p"/><path class="bdrkfzx2p"/><path class="a76rq6xbp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:smiley-drool"} {...others} />);
}

export default Component;
