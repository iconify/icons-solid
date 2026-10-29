import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tczw_hbsg.css';
import '../../css/h/hh72aib6v.css';
import '../../css/h/hkqdwxbdb.css';
import '../../css/o/oshi5ze9z.css';
import '../../css/o/ozywhg4qo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="tczw_hbsg"><path class="hh72aib6v wm-k"/><path class="hkqdwxbdb wm-a"/><path class="oshi5ze9z wm-k"/><path class="ozywhg4qo wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:arrow-up-left-sketch"} {...others} />);
}

export default Component;
