import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/casyzt9mq.css';
import '../../css/r/rsqaxjbon.css';
import '../../css/x/x2opukbfv.css';
import '../../css/x/xo7fc_jwq.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="casyzt9mq"><path class="rsqaxjbon"/><path class="x2opukbfv"/><path class="xo7fc_jwq"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"icon-park-outline:stack-light"} {...others} />);
}

export default Component;
