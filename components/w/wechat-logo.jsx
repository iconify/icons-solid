import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/d/d_jp5ksef.css';
import '../../css/w/wf1d83bdz.css';
import '../../css/t/t6zz7tbev.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="d_jp5ksef"/><path class="wf1d83bdz"/><path class="t6zz7tbev"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:wechat-logo"} {...others} />);
}

export default Component;
