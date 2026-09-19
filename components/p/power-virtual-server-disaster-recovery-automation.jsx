import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v5---93ys.css';

const viewBox = {"width":32,"height":32};
const content = `<path class="v5---93ys"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"carbon:power-virtual-server-disaster-recovery-automation"} {...others} />);
}

export default Component;
