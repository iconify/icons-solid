import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/flen3tbdj.css';
import '../../css/t/t9qsu0brn.css';
import '../../css/f/f7gbtcyuq.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="flen3tbdj"><path class="t9qsu0brn"/><path class="f7gbtcyuq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"akar-icons:pencil"} {...others} />);
}

export default Component;
