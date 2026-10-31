import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ypjkvm3ce.css';
import '../../css/x/xqp8-jfte.css';
import '../../css/k/knuz5npah.css';
import '../../css/q/qj7w784px.css';

const viewBox = {"width":1024,"height":1024};
const content = `<g display="block"><path class="ypjkvm3ce"/><path class="xqp8-jfte"/><path class="knuz5npah"/><path class="qj7w784px"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconito:zucchini"} {...others} />);
}

export default Component;
