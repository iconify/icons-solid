import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ipq1z-bjh.css';
import '../../css/e/e8kbl8kxb.css';
import '../../css/j/jiks3hb7x.css';
import '../../css/w/wqzg3jbpj.css';
import '../../css/h/h-j2vcb_a.css';
import '../../css/k/krcz9mbyu.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ipq1z-bjh"><path class="e8kbl8kxb"/><path class="jiks3hb7x"/><path class="wqzg3jbpj"/><path class="h-j2vcb_a"/><path class="krcz9mbyu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:hashtag-chat-broken"} {...others} />);
}

export default Component;
