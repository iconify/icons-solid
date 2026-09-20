import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/z/zyteidb8v.css';
import '../../css/y/y5xttol5i.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="zyteidb8v"/><path class="y5xttol5i"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:help"} {...others} />);
}

export default Component;
