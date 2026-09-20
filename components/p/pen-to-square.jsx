import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/msu-j-bsq.css';
import '../../css/j/j4ehiv-dt.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="msu-j-bsq"/><path class="j4ehiv-dt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lineicons:pen-to-square"} {...others} />);
}

export default Component;
