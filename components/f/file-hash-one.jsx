import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rggfaqb6e.css';
import '../../css/b/bnfkuob9z.css';
import '../../css/j/j3353fbdb.css';
import '../../css/w/wmcqp3blw.css';
import '../../css/s/sfcatcbwd.css';
import '../../css/w/w3y2wob5f.css';
import '../../css/l/lxqch5bjp.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="rggfaqb6e"><path class="bnfkuob9z"/><path class="j3353fbdb"/><path class="wmcqp3blw"/><path class="sfcatcbwd"/><path class="w3y2wob5f"/><path class="lxqch5bjp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park:file-hash-one"} {...others} />);
}

export default Component;
