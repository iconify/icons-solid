import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pr52f_b5y.css';
import '../../css/n/nrjtpb7yp.css';
import '../../css/x/xg-dvzv6r.css';
import '../../css/r/rs-d_y_0o.css';
import '../../css/l/ldpeo3bzf.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="pr52f_b5y"><path class="nrjtpb7yp"/><circle class="xg-dvzv6r"/><circle class="rs-d_y_0o"/><circle class="ldpeo3bzf"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:filter"} {...others} />);
}

export default Component;
