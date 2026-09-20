import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/y/y21a1x4xy.css';
import '../../css/b/b845lccxb.css';
import '../../css/m/mxww3nbtd.css';
import '../../css/c/csr-1b26y.css';
import '../../css/v/v1hoilb-m.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="y21a1x4xy"/><path class="b845lccxb"/><path class="mxww3nbtd"/><path class="csr-1b26y"/><path class="v1hoilb-m"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:theater-mask"} {...others} />);
}

export default Component;
