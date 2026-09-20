import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/s/sva600csq.css';
import '../../css/m/mtppl3b9k.css';
import '../../css/d/d_6bhqmtv.css';
import '../../css/r/r3hdhxbhs.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="sva600csq"/><path class="mtppl3b9k"/><path class="d_6bhqmtv"/><path class="r3hdhxbhs"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:street-sign"} {...others} />);
}

export default Component;
