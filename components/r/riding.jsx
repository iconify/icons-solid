import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hit3bi0-v.css';
import '../../css/n/n0j-dwb2s.css';
import '../../css/x/xcl2xpzvj.css';
import '../../css/g/gts74d00t.css';
import '../../css/u/ungdummsg.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="hit3bi0-v"><path class="n0j-dwb2s"/><path class="xcl2xpzvj"/><circle class="gts74d00t"/><circle class="ungdummsg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-solid:riding"} {...others} />);
}

export default Component;
