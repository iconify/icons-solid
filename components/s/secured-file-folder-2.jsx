import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/y/yq-me3qpa.css';
import '../../css/n/n3_hncc4o.css';
import '../../css/b/bkqr83b2h.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="yq-me3qpa"/><path class="n3_hncc4o"/><path class="bkqr83b2h"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:secured-file-folder-2"} {...others} />);
}

export default Component;
