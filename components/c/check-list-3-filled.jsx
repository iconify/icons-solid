import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hhf00q.css';
import '../../css/s/s1ui7u.css';
import '../../css/y/ydovum.css';
import '../../css/b/brgawl.css';
import '../../css/y/yuvdnt.css';
import '../../css/x/x3g9vp.css';
import '../../css/y/yuzzkf.css';
import '../../css/y/yjdnsn.css';
import '../../css/h/h62ugr.css';
import '../../css/s/so-from-24.css';
import '../../css/f/fill-to-1.css';
import '../../css/s/so-to-0.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hhf00q s1ui7u ydovum"/><path class="brgawl s1ui7u ydovum"/><path class="s1ui7u ydovum yuvdnt"/><path class="s1ui7u x3g9vp yuzzkf"/><path class="s1ui7u yjdnsn yuzzkf"/><path class="h62ugr s1ui7u yuzzkf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:check-list-3-filled"} {...others} />);
}

export default Component;
