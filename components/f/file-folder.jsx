import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/h/hqm44lbxi.css';
import '../../css/f/f8nk3lbvk.css';
import '../../css/d/drrbb3b5y.css';
import '../../css/s/sgxn03bzc.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="hqm44lbxi"/><path class="f8nk3lbvk"/><path class="drrbb3b5y"/><path class="sgxn03bzc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:file-folder"} {...others} />);
}

export default Component;
