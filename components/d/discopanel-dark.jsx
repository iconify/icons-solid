import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/uz2n8mbgp.css';
import '../../css/w/wsh1fbatf.css';
import '../../css/q/qlxr54bjj.css';
import '../../css/b/b2v1umb_q.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="uz2n8mbgp"/><path class="wsh1fbatf"/><path class="qlxr54bjj"/><path class="b2v1umb_q"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:discopanel-dark"} {...others} />);
}

export default Component;
