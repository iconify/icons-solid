import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/w/wjtpquq-y.css';
import '../../css/a/al_l5jbtl.css';
import '../../css/a/ak48c3ffn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="wjtpquq-y"/><path class="al_l5jbtl"/><path class="ak48c3ffn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:omega-capital"} {...others} />);
}

export default Component;
