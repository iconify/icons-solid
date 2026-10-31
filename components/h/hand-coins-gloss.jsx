import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/v/v93_pmbkz.css';
import '../../css/x/xo5jlbt9f.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="n1lsf0bnc"><path class="v93_pmbkz wm-k"/><path class="wm-a xo5jlbt9f"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:hand-coins-gloss"} {...others} />);
}

export default Component;
