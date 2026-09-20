import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/in9d5ac6n.css';
import '../../css/b/bsh15bben.css';
import '../../css/h/htp0g1v4z.css';
import '../../css/n/nfm8l-yni.css';
import '../../css/i/ibnhnab7c.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="in9d5ac6n"><path class="bsh15bben"/><path class="htp0g1v4z"/><path class="nfm8l-yni"/><path class="ibnhnab7c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump-color:horizontal-menu-circle"} {...others} />);
}

export default Component;
