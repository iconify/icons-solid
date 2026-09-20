import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/ylwx14bgz.css';
import '../../css/w/w3xbe3b2s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ylwx14bgz"/><path class="w3xbe3b2s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mage:snapchat"} {...others} />);
}

export default Component;
