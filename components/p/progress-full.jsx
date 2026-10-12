import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/g/gpb7eextq.css';
import '../../css/m/mpf1g8bav.css';
import '../../css/d/dsz7wltjy.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><circle class="gpb7eextq"/><circle class="mpf1g8bav"/><circle class="dsz7wltjy"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"andrsrxn:progress-full"} {...others} />);
}

export default Component;
