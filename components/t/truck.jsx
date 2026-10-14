import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/w/w2rcy8ptq.css';
import '../../css/d/d62n74bqv.css';
import '../../css/b/bmep_6boa.css';
import '../../css/a/aavvt-bqj.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="w2rcy8ptq"/><path class="d62n74bqv"/><path class="bmep_6boa"/><path class="aavvt-bqj"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:truck"} {...others} />);
}

export default Component;
