import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/r4i95ksyp.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="r4i95ksyp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:notification-message-alert-remix"} {...others} />);
}

export default Component;
