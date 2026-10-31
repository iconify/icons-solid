import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/v/vyz4atbli.css';
import '../../css/j/jksxcb43r.css';
import '../../css/s/sb9ehlgmy.css';
import '../../css/v/vrlvv_bkm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="vyz4atbli wm-shadow"/><path class="jksxcb43r wm-shadow"/><path class="sb9ehlgmy"/><path class="vrlvv_bkm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:corner-down-left"} {...others} />);
}

export default Component;
