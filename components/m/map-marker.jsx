import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/u148y6bbs.css';
import '../../css/r/re4cghb4q.css';
import '../../css/c/cz14bobdc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="u148y6bbs"><path class="re4cghb4q"/><path class="cz14bobdc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:map-marker"} {...others} />);
}

export default Component;
