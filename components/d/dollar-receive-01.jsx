import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wam2n5bje.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wam2n5bje"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:dollar-receive-01"} {...others} />);
}

export default Component;
