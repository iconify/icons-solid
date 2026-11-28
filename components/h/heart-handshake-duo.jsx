import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ea5taoauh.css';
import '../../css/d/dt0cm9dhy.css';
import '../../css/e/ekf8t7boi.css';
import '../../css/j/jmgrsengl.css';
import '../../css/y/y09vs8_da.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ea5taoauh secondary"/><g class="dt0cm9dhy primary"><path class="ekf8t7boi"/><path class="jmgrsengl"/><path class="y09vs8_da"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:heart-handshake-duo"} {...others} />);
}

export default Component;
