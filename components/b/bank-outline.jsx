import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/b/buf9gg7ha.css';
import '../../css/s/sh_se6b_t.css';
import '../../css/c/ch5we-bio.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="buf9gg7ha"/><path class="sh_se6b_t"/><path class="ch5we-bio"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:bank-outline"} {...others} />);
}

export default Component;
