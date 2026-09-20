import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qbrxq9bxg.css';

const viewBox = {"width":14,"height":14};
const content = `<path clip-rule="evenodd" class="qbrxq9bxg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:disable-bell-notification-solid"} {...others} />);
}

export default Component;
