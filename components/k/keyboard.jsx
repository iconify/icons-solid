import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/x/xs57kdb9i.css';
import '../../css/d/d0dt39byy.css';
import '../../css/l/l4657hg_b.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="xs57kdb9i"/><path class="d0dt39byy"/><path class="l4657hg_b"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:keyboard"} {...others} />);
}

export default Component;
