import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/p/pxy4pkb4g.css';
import '../../css/h/hszogpsne.css';
import '../../css/a/a5706cu5c.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="pxy4pkb4g"/><path class="hszogpsne"/><path class="a5706cu5c"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:message-secure-01"} {...others} />);
}

export default Component;
