import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nz_20wbpz.css';
import '../../css/n/ndb7b7lyp.css';
import '../../css/j/jcjjd5bjf.css';
import '../../css/g/gxdryjbrf.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="nz_20wbpz"><path class="ndb7b7lyp"/><path class="jcjjd5bjf"/><path class="gxdryjbrf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:add-item"} {...others} />);
}

export default Component;
