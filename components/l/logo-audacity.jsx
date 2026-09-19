import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/r/roz0gr1al.css';
import '../../css/b/bti7b4bab.css';

const viewBox = {"width":256,"height":256};
const content = `<g class="n1lsf0bnc"><path class="roz0gr1al"/><path class="bti7b4bab"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fad:logo-audacity"} {...others} />);
}

export default Component;
