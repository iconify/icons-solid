import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/yov418k2z.css';
import '../../css/w/wv43mybxd.css';
import '../../css/v/v3jarib8i.css';
import '../../css/n/nvangkgwa.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="yov418k2z"/><path class="wv43mybxd"/><path class="v3jarib8i"/><path class="nvangkgwa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:schoolmessenger"} {...others} />);
}

export default Component;
