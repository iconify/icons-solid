import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j9639ubdc.css';
import '../../css/r/r9hltrbzo.css';
import '../../css/q/qx1a70s3d.css';
import '../../css/a/axn1pzbjv.css';
import '../../css/y/ykhkgk-ul.css';
import '../../css/h/hjx4b3_hq.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="j9639ubdc"/><path class="r9hltrbzo"/><path class="qx1a70s3d"/><path class="axn1pzbjv"/><path class="ykhkgk-ul"/><path class="hjx4b3_hq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:tram"} {...others} />);
}

export default Component;
