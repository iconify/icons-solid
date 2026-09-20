import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pzf8dc2zn.css';
import '../../css/q/qxiuwe1zk.css';
import '../../css/e/eer3mwnpz.css';
import '../../css/q/qwq0l67ot.css';
import '../../css/a/anq1cwbxn.css';
import '../../css/u/utlrnyquw.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="pzf8dc2zn"/><path class="qxiuwe1zk"/><path class="eer3mwnpz"/><path class="qwq0l67ot"/><path class="anq1cwbxn"/><path class="utlrnyquw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:medikeep"} {...others} />);
}

export default Component;
