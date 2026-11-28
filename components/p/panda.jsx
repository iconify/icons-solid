import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dt0cm9dhy.css';
import '../../css/a/azo1x_mpi.css';
import '../../css/y/yil20kbin.css';
import '../../css/a/apptkdboz.css';
import '../../css/l/la6s5wbjd.css';
import '../../css/l/lwu0iv-js.css';
import '../../css/y/y9seu5btc.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dt0cm9dhy"><path class="azo1x_mpi"/><path class="yil20kbin"/><path class="apptkdboz"/><path class="la6s5wbjd"/><path class="lwu0iv-js"/><path class="y9seu5btc"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:panda"} {...others} />);
}

export default Component;
