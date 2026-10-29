import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/i/irsn4xb5r.css';
import '../../css/r/r338hqbsu.css';
import '../../css/l/lvjdmbcqy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="irsn4xb5r"/><path class="r338hqbsu wm-k"/><path class="lvjdmbcqy wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:calculator-sketch"} {...others} />);
}

export default Component;
