import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/ikw832bkv.css';
import '../../css/d/dnmw1x70r.css';
import '../../css/t/tnenhly6r.css';
import '../../css/c/ck1_vwbrp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="ft5dv1b6b"><path class="ikw832bkv"/><path class="dnmw1x70r"/><path class="tnenhly6r"/><path class="ck1_vwbrp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-kameleon-color:start-duo"} {...others} />);
}

export default Component;
