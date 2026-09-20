import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bjuxlcckf.css';
import '../../css/e/ejuf35bcd.css';
import '../../css/x/xwkcvac5a.css';
import '../../css/w/whf4zhv6r.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="bjuxlcckf"/><path class="ejuf35bcd"/><path clip-rule="evenodd" class="xwkcvac5a"/><path class="whf4zhv6r"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mingcute:lighthouse-fill"} {...others} />);
}

export default Component;
