import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u7yff5b2a.css';
import '../../css/i/i0e1ugb7u.css';

const viewBox = {"width":2048,"height":2048};
const content = `<g transform="translate(0 995.638)"><path class="u7yff5b2a"/><rect class="i0e1ugb7u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bpmn:subprocess-collapsed"} {...others} />);
}

export default Component;
