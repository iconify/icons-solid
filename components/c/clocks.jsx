import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/a2z29zb9a.css';
import '../../css/z/zylob-b1v.css';
import '../../css/m/m_g9cerbk.css';
import '../../css/m/m0gubtb5o.css';
import '../../css/b/brnj5ubbo.css';
import '../../css/j/jkpms2b3a.css';
import '../../css/n/nmv-rksiu.css';

const viewBox = {"width":100,"height":100};
const content = `<circle class="a2z29zb9a"/><path class="zylob-b1v"/><path class="m_g9cerbk"/><path class="m0gubtb5o"/><path class="brnj5ubbo"/><path class="jkpms2b3a"/><path class="nmv-rksiu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-ui:clocks"} {...others} />);
}

export default Component;
