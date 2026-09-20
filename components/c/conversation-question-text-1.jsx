import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/btun33och.css';
import '../../css/e/evswpnqiu.css';
import '../../css/n/n8xi_5opn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="btun33och"/><path class="evswpnqiu"/><path class="n8xi_5opn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand:conversation-question-text-1"} {...others} />);
}

export default Component;
