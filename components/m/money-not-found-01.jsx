import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/h/h2qzx2p8y.css';
import '../../css/w/wber-hsua.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="h2qzx2p8y"/><path class="wber-hsua"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:money-not-found-01"} {...others} />);
}

export default Component;
