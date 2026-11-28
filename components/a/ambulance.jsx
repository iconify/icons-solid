import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/g/g_7belbxz.css';
import '../../css/a/acjxr3b9a.css';
import '../../css/c/cfqx7ubxb.css';
import '../../css/m/m48o-0b4t.css';
import '../../css/x/xdanm-bki.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="g_7belbxz"/><path class="acjxr3b9a"/><path class="cfqx7ubxb"/><circle class="m48o-0b4t"/><circle class="xdanm-bki"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:ambulance"} {...others} />);
}

export default Component;
