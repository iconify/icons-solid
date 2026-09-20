import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qtzp2h9ju.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qtzp2h9ju"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"lets-icons:horizontal-top-left-main"} {...others} />);
}

export default Component;
