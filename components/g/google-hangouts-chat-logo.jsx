import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/k/k96ff6igm.css';
import '../../css/i/iaahqtbth.css';
import '../../css/a/aezy8qb_v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="k96ff6igm"/><path class="iaahqtbth"/><path class="aezy8qb_v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:google-hangouts-chat-logo"} {...others} />);
}

export default Component;
