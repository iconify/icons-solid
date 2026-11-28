import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/v/ve8q_8xia.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ve8q_8xia"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:exclude-solid"} {...others} />);
}

export default Component;
