import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xn5eo9bqs.css';
import '../../css/g/g0w7nikov.css';
import '../../css/n/nc24kdbti.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="xn5eo9bqs"><path class="g0w7nikov"/><path class="nc24kdbti"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"matita:lambda"} {...others} />);
}

export default Component;
