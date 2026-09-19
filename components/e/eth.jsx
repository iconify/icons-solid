import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n1lsf0bnc.css';
import '../../css/d/dbmfimb0q.css';
import '../../css/l/l5y23ru5w.css';
import '../../css/a/axu8vacgl.css';
import '../../css/k/kouxvgbln.css';
import '../../css/g/gzzcnbppf.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="n1lsf0bnc"><path class="dbmfimb0q"/><g class="l5y23ru5w"><path class="axu8vacgl"/><path class="kouxvgbln"/><path class="gzzcnbppf"/></g></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency:eth"} {...others} />);
}

export default Component;
