import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g_kxo3vjf.css';
import '../../css/y/ycj4854jp.css';

const viewBox = {"width":2048,"height":2048};
const content = `<path class="g_kxo3vjf"/><path transform="matrix(125.07186 0 0 96.75291 2539.419 -100217.58)" class="ycj4854jp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bpmn:default-flow"} {...others} />);
}

export default Component;
