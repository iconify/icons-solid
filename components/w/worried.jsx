import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/k/kddx2tbsb.css';
import '../../css/z/zc6bqab-k.css';
import '../../css/v/vomueybnb.css';
import '../../css/x/xdt5s-nuj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="kddx2tbsb wm-k"/><path class="wm-s zc6bqab-k"/><path class="vomueybnb"/><path class="xdt5s-nuj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:worried"} {...others} />);
}

export default Component;
