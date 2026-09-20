import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n8oo7gb6g.css';
import '../../css/t/tm9m4obqt.css';
import '../../css/k/keh46gbno.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="n8oo7gb6g"><path class="tm9m4obqt"/><path class="keh46gbno"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:sleeping-bag-2"} {...others} />);
}

export default Component;
