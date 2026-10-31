import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/buo-lrxjh.css';
import '../../css/e/eiohwv5zo.css';
import '../../css/g/gtix4cb0c.css';
import '../../css/o/o_huqp5cj.css';
import '../../css/n/nend77pcx.css';
import '../../css/b/bahqy-ige.css';
import '../../css/g/g-82y17yx.css';
import '../../css/t/tm607cctb.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="buo-lrxjh"/><path class="eiohwv5zo"/><path class="gtix4cb0c"/><path class="o_huqp5cj"/><path class="nend77pcx"/><path class="bahqy-ige"/><path class="g-82y17yx"/><path class="tm607cctb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconito:flour"} {...others} />);
}

export default Component;
