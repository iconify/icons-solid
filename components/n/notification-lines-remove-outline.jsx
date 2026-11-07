import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rjpoj8_cg.css';
import '../../css/a/aso22wbxm.css';
import '../../css/s/sv_kzcbth.css';
import '../../css/l/l0exbachf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rjpoj8_cg"/><path class="aso22wbxm"/><path class="sv_kzcbth"/><path class="l0exbachf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:notification-lines-remove-outline"} {...others} />);
}

export default Component;
