import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g2ds1lbwe.css';
import '../../css/p/pqhca394o.css';
import '../../css/y/y9052qmiw.css';
import '../../css/m/m2qc0esdi.css';
import '../../css/t/t_oah-bdy.css';
import '../../css/h/hnb6f2b3q.css';
import '../../css/q/qbmj9sseh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="g2ds1lbwe wm-shadow"/><path class="pqhca394o"/><path class="y9052qmiw"/><path class="m2qc0esdi"/><path class="t_oah-bdy"/><path class="hnb6f2b3q wm-shine"/><path class="qbmj9sseh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-plush:activity"} {...others} />);
}

export default Component;
