import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/d/dgwx5ub8o.css';
import '../../css/f/f_tt1dbek.css';
import '../../css/y/yclr7n-rv.css';
import '../../css/g/gsx_eifrg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="dgwx5ub8o"/><path class="f_tt1dbek"/><path class="yclr7n-rv"/><path class="gsx_eifrg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-freehand-color:mobile-phone-write"} {...others} />);
}

export default Component;
