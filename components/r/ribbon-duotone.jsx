import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/v6b6ryozd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="primary v6b6ryozd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:ribbon-duotone"} {...others} />);
}

export default Component;
