import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/v/vz-omtr6g.css';
import '../../css/v/vldmfnb0n.css';
import '../../css/v/vb5rvphpi.css';
import '../../css/u/u6gzkkp0i.css';
import '../../css/m/mxetb5bzm.css';
import '../../css/q/qy9utrbbw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="vz-omtr6g wm-shadow"/><path class="vldmfnb0n wm-shadow"/><path class="vb5rvphpi"/><path class="u6gzkkp0i"/><path class="mxetb5bzm"/><path class="qy9utrbbw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:coins"} {...others} />);
}

export default Component;
