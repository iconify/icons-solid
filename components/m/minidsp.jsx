import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cf8jptdul.css';
import '../../css/o/o1y82wb2y.css';
import '../../css/m/mstdj_b5a.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cf8jptdul"/><path class="o1y82wb2y"/><path class="mstdj_b5a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:minidsp"} {...others} />);
}

export default Component;
