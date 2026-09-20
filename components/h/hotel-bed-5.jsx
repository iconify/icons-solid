import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/j/jaet_dy9z.css';
import '../../css/l/l8l539e9x.css';
import '../../css/y/yxnlbebiw.css';
import '../../css/p/pxxgm4udm.css';
import '../../css/d/dh5_nnbks.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="jaet_dy9z"/><path class="l8l539e9x"/><path class="yxnlbebiw"/><path class="pxxgm4udm"/><path class="dh5_nnbks"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:hotel-bed-5"} {...others} />);
}

export default Component;
