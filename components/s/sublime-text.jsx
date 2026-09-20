import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/h-htnbcov.css';
import '../../css/h/h79w7ebun.css';
import '../../css/y/y15y19baw.css';
import '../../css/x/x3lo5jswq.css';
import '../../css/a/a07kqu_br.css';
import '../../css/v/vf7123vwl.css';

const viewBox = {"width":256,"height":332};
const content = `<defs><linearGradient id="SVGL9oVpcfY" x1="55.117%" x2="63.68%" y1="58.68%" y2="39.597%"><stop offset="0%" class="h-htnbcov"/><stop offset="53%" class="h79w7ebun"/><stop offset="100%" class="y15y19baw"/></linearGradient></defs><path fill="url(#SVGL9oVpcfY)" class="x3lo5jswq"/><path class="a07kqu_br"/><path class="vf7123vwl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:sublime-text"} {...others} />);
}

export default Component;
