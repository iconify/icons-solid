import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ux4d9xb7y.css';
import '../../css/s/smb7zz0bj.css';
import '../../css/j/jja78btni.css';
import '../../css/u/uu7c2_eyd.css';
import '../../css/s/sp33cibwq.css';
import '../../css/l/l-o8iccuo.css';
import '../../css/z/zjbdaxgad.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ux4d9xb7y"/><path class="smb7zz0bj"/><path class="jja78btni"/><path class="uu7c2_eyd"/><path clip-rule="evenodd" class="sp33cibwq"/><path class="l-o8iccuo"/><path class="zjbdaxgad"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wi-fi-router-outline"} {...others} />);
}

export default Component;
