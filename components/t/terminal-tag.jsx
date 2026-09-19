import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hntgybcog.css';
import '../../css/l/ljpxgdjml.css';
import '../../css/r/retr8xbue.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="hntgybcog"><path class="ljpxgdjml"/><path class="retr8xbue"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconoir:terminal-tag"} {...others} />);
}

export default Component;
