import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/d/dca2urprn.css';
import '../../css/t/t-hhzbcli.css';
import '../../css/n/np8nxgbar.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="dca2urprn"/><path class="t-hhzbcli"/><path class="np8nxgbar"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:doorbell"} {...others} />);
}

export default Component;
