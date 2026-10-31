import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/w/wfstmsjum.css';
import '../../css/p/pa3vqph5t.css';
import '../../css/i/id1cbpb8a.css';
import '../../css/o/o5lgej52u.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wfstmsjum wm-shadow"/><path class="pa3vqph5t wm-shadow"/><path class="id1cbpb8a"/><path class="o5lgej52u"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:bread"} {...others} />);
}

export default Component;
