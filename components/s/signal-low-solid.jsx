import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wysknn0pv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wysknn0pv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:signal-low-solid"} {...others} />);
}

export default Component;
