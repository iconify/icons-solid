import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/g/gz36wzbtw.css';
import '../../css/l/lzgk-k20t.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="gz36wzbtw"/><path class="lzgk-k20t"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:pipe-4"} {...others} />);
}

export default Component;
