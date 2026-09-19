import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xuchegb-g.css';
import '../../css/i/izub48k_p.css';
import '../../css/q/qnwimlb0g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xuchegb-g"/><path class="izub48k_p"/><path class="qnwimlb0g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:bear"} {...others} />);
}

export default Component;
