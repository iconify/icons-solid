import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iqfo8ifwt.css';
import '../../css/k/kc03hjs4s.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="iqfo8ifwt"/><path class="kc03hjs4s"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"prime:chart-bar"} {...others} />);
}

export default Component;
