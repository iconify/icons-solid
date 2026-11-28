import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/vcq4rebkq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="primary vcq4rebkq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:wifi-off-duotone"} {...others} />);
}

export default Component;
