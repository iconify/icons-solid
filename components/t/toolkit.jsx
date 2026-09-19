import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a0a9vkbzg.css';
import '../../css/k/kwy_kebgz.css';
import '../../css/x/xoug70gxr.css';
import '../../css/g/g8omeujsg.css';
import '../../css/y/y66t17biy.css';
import '../../css/j/jdf113i5g.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="a0a9vkbzg"><path class="kwy_kebgz"/><path class="xoug70gxr"/><path class="g8omeujsg"/><path class="y66t17biy"/><path class="jdf113i5g"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:toolkit"} {...others} />);
}

export default Component;
