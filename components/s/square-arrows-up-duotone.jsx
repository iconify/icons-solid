import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cuyn6tgcc.css';
import '../../css/z/z_d738b5m.css';
import '../../css/n/n05h0ubiq.css';
import '../../css/q/qbvbg5nfn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="cuyn6tgcc"><path class="z_d738b5m"/><path class="n05h0ubiq"/><path class="qbvbg5nfn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"reicon:square-arrows-up-duotone"} {...others} />);
}

export default Component;
