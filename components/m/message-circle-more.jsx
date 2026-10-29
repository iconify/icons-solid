import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t222qp1dw.css';
import '../../css/t/tpohchbcz.css';
import '../../css/m/mq6pl43bl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t222qp1dw wm-k"/><path class="tpohchbcz wm-a"/><path class="mq6pl43bl wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:message-circle-more"} {...others} />);
}

export default Component;
