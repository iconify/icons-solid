import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/n/n4hfolbfa.css';
import '../../css/o/o5ywef7nt.css';
import '../../css/t/te682eb5s.css';
import '../../css/g/g9owp9b4k.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="n4hfolbfa"/><path class="o5ywef7nt wm-a"/><path class="te682eb5s"/><path class="g9owp9b4k wm-a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons:chef-hat-duo"} {...others} />);
}

export default Component;
