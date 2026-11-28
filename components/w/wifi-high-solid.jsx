import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ist0xi34j.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ist0xi34j"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:wifi-high-solid"} {...others} />);
}

export default Component;
