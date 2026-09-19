import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wwvp95byt.css';
import '../../css/w/wuhlr6b7t.css';
import '../../css/i/il4ia8h5q.css';
import '../../css/w/w75yfdbqh.css';
import '../../css/l/lz1-lobry.css';
import '../../css/d/ddphdnb6e.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="wwvp95byt"><path class="wuhlr6b7t"/><path class="il4ia8h5q"/><path class="w75yfdbqh"/><path class="lz1-lobry"/><path class="ddphdnb6e"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:adjustment"} {...others} />);
}

export default Component;
