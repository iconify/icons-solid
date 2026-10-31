import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/x/x4r3srb3i.css';
import '../../css/d/dw8kwrbaz.css';
import '../../css/z/zvqjcz3jn.css';
import '../../css/t/t8dv-w75i.css';
import '../../css/y/y477ikbnp.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow x4r3srb3i"/><path class="dw8kwrbaz wm-shadow"/><path class="zvqjcz3jn"/><path class="t8dv-w75i"/><path class="wm-s y477ikbnp"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:smile-plus"} {...others} />);
}

export default Component;
