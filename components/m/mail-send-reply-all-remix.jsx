import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qvt5o2b6f.css';

const viewBox = {"width":48,"height":48};
const content = `<path clip-rule="evenodd" class="qvt5o2b6f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-plump:mail-send-reply-all-remix"} {...others} />);
}

export default Component;
