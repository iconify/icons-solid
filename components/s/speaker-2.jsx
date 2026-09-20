import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rvnqahb0g.css';
import '../../css/c/cka-_1bjj.css';
import '../../css/w/wn1g3hx3l.css';
import '../../css/t/t2m_7ccmw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rvnqahb0g"><path class="cka-_1bjj"/><path class="wn1g3hx3l"/><path class="t2m_7ccmw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:speaker-2"} {...others} />);
}

export default Component;
