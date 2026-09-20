import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/d/dj1fxccvv.css';
import '../../css/t/t07-e-mxc.css';
import '../../css/l/ld1liobjf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="dj1fxccvv"/><path class="t07-e-mxc"/><path class="ld1liobjf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:reddit-logo"} {...others} />);
}

export default Component;
