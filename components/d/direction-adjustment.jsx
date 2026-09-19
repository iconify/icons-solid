import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/b/b5fsfvb3t.css';
import '../../css/w/wjzt-ubkr.css';
import '../../css/n/nltaw2bqd.css';
import '../../css/o/oev2hvb9x.css';
import '../../css/b/bwdpl5zyw.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="b5fsfvb3t"/><path class="wjzt-ubkr"/><path class="nltaw2bqd"/><path class="oev2hvb9x"/><circle class="bwdpl5zyw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:direction-adjustment"} {...others} />);
}

export default Component;
