import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/b/bpuwlobok.css';
import '../../css/m/mx53s8b-j.css';
import '../../css/b/b8q_cvhji.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="bpuwlobok wm-shadow"/><path class="mx53s8b-j wm-shadow"/><path class="b8q_cvhji"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:chart-line"} {...others} />);
}

export default Component;
