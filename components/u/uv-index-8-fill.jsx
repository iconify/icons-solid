import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ykd9cjbnf.css';
import '../../css/f/fqk8mibcy.css';
import '../../css/h/hni2gnbts.css';
import '../../css/l/luenvmnwd.css';
import '../../css/u/uazzy_ebx.css';
import '../../css/e/ec2jr6bnw.css';
import '../../css/s/srk99maza.css';
import '../../css/c/cfzc0cf2w.css';

const viewBox = {"width":512,"height":512};
const content = `<defs><linearGradient id="SVGeq4GoeLw" x1="150" x2="234" y1="119.2" y2="264.8" gradientUnits="userSpaceOnUse"><stop offset="0" class="ykd9cjbnf"/><stop offset=".5" class="ykd9cjbnf"/><stop offset="1" class="fqk8mibcy"/></linearGradient><clipPath id="SVGClf4gb3K"><path class="hni2gnbts"/></clipPath><symbol id="SVG0a04Kbxn" viewBox="0 0 384 384"><circle fill="url(#SVGeq4GoeLw)" class="luenvmnwd"/><path class="uazzy_ebx"><animateTransform additive="sum" attributeName="transform" dur="6s" repeatCount="indefinite" type="rotate" values="0 192 192; 45 192 192"/></path></symbol></defs><g clip-path="url(#SVGClf4gb3K)"><use width="384" height="384" href="#SVG0a04Kbxn" transform="translate(64 64)"/><path class="ec2jr6bnw"/></g><rect class="srk99maza"/><path class="cfzc0cf2w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"meteocons:uv-index-8-fill"} {...others} />);
}

export default Component;
