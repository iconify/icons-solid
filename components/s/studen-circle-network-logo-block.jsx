import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/axzo35bcc.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="axzo35bcc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:studen-circle-network-logo-block"} {...others} />);
}

export default Component;
