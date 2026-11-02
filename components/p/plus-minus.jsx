import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/d/d3f7vubre.css';
import '../../css/a/a-m7irbsn.css';
import '../../css/n/nn7ldeyao.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="d3f7vubre"/><path class="a-m7irbsn"/><path class="nn7ldeyao"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:plus-minus"} {...others} />);
}

export default Component;
