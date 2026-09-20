import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xoeey_btx.css';
import '../../css/w/wp2wpdvnk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xoeey_btx"/><path class="wp2wpdvnk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate:contact-us-faq-bold"} {...others} />);
}

export default Component;
