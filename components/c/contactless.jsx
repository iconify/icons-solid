import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/t/toqfeqwxd.css';
import '../../css/a/avwn_tn0m.css';
import '../../css/t/tsoxedcoo.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="toqfeqwxd wm-shadow"/><path class="avwn_tn0m wm-shadow"/><path class="tsoxedcoo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:contactless"} {...others} />);
}

export default Component;
