import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nruyxmb0r.css';
import '../../css/y/ysrry-bqw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nruyxmb0r"/><path class="ysrry-bqw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:arrow-in-up-right-stroke-circle"} {...others} />);
}

export default Component;
