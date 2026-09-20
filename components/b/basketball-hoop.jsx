import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/h/hy95mxb0m.css';
import '../../css/b/b2qai5ksz.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="hy95mxb0m"/><path class="b2qai5ksz"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:basketball-hoop"} {...others} />);
}

export default Component;
