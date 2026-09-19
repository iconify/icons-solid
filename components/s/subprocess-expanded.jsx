import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n2l13g56y.css';
import '../../css/y/yu9v0h85x.css';
import '../../css/i/i0e1ugb7u.css';

const viewBox = {"width":2048,"height":2048};
const content = `<g transform="translate(0 995.638)"><path class="n2l13g56y"/><path class="yu9v0h85x"/><rect class="i0e1ugb7u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bpmn:subprocess-expanded"} {...others} />);
}

export default Component;
