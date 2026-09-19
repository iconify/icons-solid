import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mltz1-3_c.css';
import '../../css/h/hzwaagb3g.css';
import '../../css/t/tgddkdmlp.css';
import '../../css/k/ky6vsbbsb.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="mltz1-3_c"/><path class="hzwaagb3g"/><path class="tgddkdmlp"/><path class="ky6vsbbsb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fxemoji:snowmountains"} {...others} />);
}

export default Component;
