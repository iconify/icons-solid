import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/b2qtvgb0p.css';
import '../../css/q/qo0tyqbsw.css';
import '../../css/t/t7_drybpi.css';
import '../../css/p/p3bxfdc9b.css';
import '../../css/z/zi0m0hb5k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="b2qtvgb0p wm-k"/><path class="qo0tyqbsw wm-a"/><path class="t7_drybpi wm-a"/><path class="p3bxfdc9b wm-a"/><path class="wm-a zi0m0hb5k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:credit-card"} {...others} />);
}

export default Component;
