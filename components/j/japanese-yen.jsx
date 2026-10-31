import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/l/l1ycygiru.css';
import '../../css/j/jqrzwrb5v.css';
import '../../css/y/y2iwx1nyi.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="l1ycygiru wm-shadow"/><path class="jqrzwrb5v wm-shadow"/><path class="y2iwx1nyi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:japanese-yen"} {...others} />);
}

export default Component;
