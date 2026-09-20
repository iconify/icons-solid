import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p07tmccvv.css';
import '../../css/w/wnmdmcbzm.css';
import '../../css/k/k1ta6cbfr.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="p07tmccvv"><path class="wnmdmcbzm"/><path class="k1ta6cbfr"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:airplay-wave"} {...others} />);
}

export default Component;
