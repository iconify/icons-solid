import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/q/qg-v6005a.css';
import '../../css/x/xtg3hkbfs.css';
import '../../css/i/i8_d-kclp.css';
import '../../css/g/gv9wppb4r.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="qg-v6005a"/><path class="xtg3hkbfs"/><path class="i8_d-kclp"/><path class="gv9wppb4r"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:file-music-2"} {...others} />);
}

export default Component;
