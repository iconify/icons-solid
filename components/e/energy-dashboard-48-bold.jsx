import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l5x3dvjat.css';
import '../../css/h/htwye9bzz.css';
import '../../css/b/bo4ks1u_u.css';
import '../../css/c/c9s910gwp.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="l5x3dvjat"/><path class="htwye9bzz"/><path class="bo4ks1u_u"/><path class="c9s910gwp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:energy-dashboard-48-bold"} {...others} />);
}

export default Component;
