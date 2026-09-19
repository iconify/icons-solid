import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bi12bsetm.css';
import '../../css/s/s3uhn8bcc.css';
import '../../css/i/ih8n30w6j.css';

const viewBox = {"width":32,"height":32};
const content = `<g class="bi12bsetm"><circle class="s3uhn8bcc"/><path class="ih8n30w6j"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cryptocurrency-color:cob"} {...others} />);
}

export default Component;
