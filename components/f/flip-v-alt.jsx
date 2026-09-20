import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sr_4lkqsn.css';
import '../../css/k/kwj8pfbpn.css';
import '../../css/x/xqzgogbta.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sr_4lkqsn"/><path class="kwj8pfbpn"/><path class="xqzgogbta"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:flip-v-alt"} {...others} />);
}

export default Component;
