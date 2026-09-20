import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qzdyxlbsx.css';
import '../../css/h/hsfvaaccc.css';
import '../../css/r/r6l3sbc9i.css';
import '../../css/m/mvxkxk3fh.css';
import '../../css/y/yymt_bcef.css';
import '../../css/q/qszz-hbxb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="qzdyxlbsx"/><path class="hsfvaaccc"/><path class="r6l3sbc9i"/><path class="mvxkxk3fh"/><path class="yymt_bcef"/><path class="qszz-hbxb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:buildbot-light"} {...others} />);
}

export default Component;
