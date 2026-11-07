import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nu-jqnb_g.css';
import '../../css/j/j50599bqy.css';
import '../../css/y/ykm7xbcmi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nu-jqnb_g"/><path class="j50599bqy"/><path class="ykm7xbcmi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:link-minimalistic-outline"} {...others} />);
}

export default Component;
