import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l3lph30dl.css';
import '../../css/w/w6r6sxrzo.css';
import '../../css/o/omlunobmw.css';
import '../../css/b/bhx3wd61g.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="l3lph30dl"><path class="w6r6sxrzo"/><path class="omlunobmw"/><path class="bhx3wd61g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:code"} {...others} />);
}

export default Component;
