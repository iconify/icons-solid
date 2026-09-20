import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nrj6p8qat.css';
import '../../css/z/zopjch_2q.css';
import '../../css/x/xe53owbmy.css';
import '../../css/s/s368qvblr.css';
import '../../css/n/ny1qr-80o.css';
import '../../css/w/w9-l4pzix.css';
import '../../css/n/nc5jv0bhh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="nrj6p8qat"><circle class="zopjch_2q"/><circle class="xe53owbmy"/><circle class="s368qvblr"/><circle class="ny1qr-80o"/><circle class="w9-l4pzix"/><circle class="nc5jv0bhh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lucide:circle-pile"} {...others} />);
}

export default Component;
