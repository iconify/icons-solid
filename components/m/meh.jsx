import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/n/nms7-qboh.css';
import '../../css/h/ht1igy88y.css';
import '../../css/k/k-64ydb8a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="nms7-qboh"/><path class="ht1igy88y"/><path class="k-64ydb8a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:meh"} {...others} />);
}

export default Component;
