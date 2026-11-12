import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o8hgju72p.css';
import '../../css/u/u9y__jw4b.css';
import '../../css/z/zujjfbcsh.css';
import '../../css/x/xbfqloslf.css';
import '../../css/v/v3vlycc2h.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="o8hgju72p"/><path class="u9y__jw4b"/><path class="zujjfbcsh"/><path class="xbfqloslf"/><path class="v3vlycc2h"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:nyt-tiles"} {...others} />);
}

export default Component;
