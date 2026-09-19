import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xasqk3bsr.css';
import '../../css/n/n6qmh_e3o.css';
import '../../css/r/rxvy5xtzy.css';
import '../../css/h/h9-n7bb9y.css';
import '../../css/d/dnmo94bwx.css';
import '../../css/j/jiilj-bms.css';
import '../../css/f/fedd21bpj.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="xasqk3bsr"/><path class="n6qmh_e3o"/><path class="rxvy5xtzy"/><path class="h9-n7bb9y"/><path class="dnmo94bwx"/><path class="jiilj-bms"/><path class="fedd21bpj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"ion:md-partly-sunny"} {...others} />);
}

export default Component;
