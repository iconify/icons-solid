import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/x/xxy4eau_a.css';
import '../../css/u/uujgzzyfl.css';
import '../../css/z/zylensbpe.css';
import '../../css/z/zuaboxd8v.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="wm-shadow xxy4eau_a"/><path class="uujgzzyfl wm-shadow"/><path class="zylensbpe"/><path class="zuaboxd8v"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:file-code"} {...others} />);
}

export default Component;
