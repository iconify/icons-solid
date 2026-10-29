import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gwlzaip9s.css';
import '../../css/m/my8csmb7j.css';
import '../../css/l/leztz6b5o.css';
import '../../css/y/y0wl37bsc.css';
import '../../css/u/ujmcvo-su.css';
import '../../css/a/a0kq-0soy.css';
import '../../css/r/rutkzubzw.css';
import '../../css/g/gpcxshgwk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gwlzaip9s wm-shadow"/><path class="my8csmb7j wm-k"/><path class="leztz6b5o wm-k"/><path class="wm-k y0wl37bsc"/><path class="ujmcvo-su wm-k"/><path class="a0kq-0soy wm-k"/><path class="rutkzubzw wm-shine"/><path class="gpcxshgwk wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-pastel:switch-camera"} {...others} />);
}

export default Component;
