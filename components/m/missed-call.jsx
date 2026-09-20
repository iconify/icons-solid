import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/e/e5qkxdb4o.css';
import '../../css/e/ep28l9boi.css';
import '../../css/g/gt7rp6hyd.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="ft5dv1b6b"><path class="e5qkxdb4o"/><path class="ep28l9boi"/><path class="gt7rp6hyd"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex-color:missed-call"} {...others} />);
}

export default Component;
