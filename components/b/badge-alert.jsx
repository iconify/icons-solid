import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/l/l6v7k9jlc.css';
import '../../css/v/vh6ew5zpe.css';
import '../../css/g/gnm-bnb7y.css';
import '../../css/u/ufur1cbsn.css';
import '../../css/c/ck4_hcbic.css';
import '../../css/r/rj0o-pb5t.css';
import '../../css/b/b1jj7ocry.css';
import '../../css/q/qc2mahb6a.css';
import '../../css/b/bgn3o-enk.css';
import '../../css/y/yoqx8hbqs.css';
import '../../css/y/y9e63rbjm.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="l6v7k9jlc wm-shadow"/><path class="vh6ew5zpe wm-shadow"/><path class="gnm-bnb7y"/><path class="ufur1cbsn"/><path class="ck4_hcbic"/><path class="rj0o-pb5t"/><path class="b1jj7ocry wm-shine"/><path class="qc2mahb6a wm-shine"/><path class="bgn3o-enk"/><path class="yoqx8hbqs"/><path class="y9e63rbjm"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-skeuo:badge-alert"} {...others} />);
}

export default Component;
