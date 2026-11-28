import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/v/v7mrbtq2p.css';
import '../../css/n/nkgwb_xhr.css';
import '../../css/c/c2tnx8j5w.css';
import '../../css/y/yhe1qpqgh.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="v7mrbtq2p"/><path class="nkgwb_xhr"/><path class="c2tnx8j5w"/><path class="yhe1qpqgh"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:medal"} {...others} />);
}

export default Component;
