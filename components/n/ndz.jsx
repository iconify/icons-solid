import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/q/qd3fo3ams.css';
import '../../css/t/tv-9bu2pf.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="qd3fo3ams"/><path class="tv-9bu2pf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:ndz"} {...others} />);
}

export default Component;
