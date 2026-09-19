import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nvyw8shky.css';
import '../../css/s/si38sl8xh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nvyw8shky"/><path class="si38sl8xh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:church"} {...others} />);
}

export default Component;
