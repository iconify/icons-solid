import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/j/jhp4wknli.css';
import '../../css/j/jbd_klbyv.css';
import '../../css/v/v8npkhbao.css';
import '../../css/e/e4piyhorf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="jhp4wknli wm-shadow"/><path class="jbd_klbyv wm-shadow"/><path class="v8npkhbao"/><path class="e4piyhorf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:rabbit"} {...others} />);
}

export default Component;
