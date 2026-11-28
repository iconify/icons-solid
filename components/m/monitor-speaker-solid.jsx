import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/gk22n923i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="gk22n923i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:monitor-speaker-solid"} {...others} />);
}

export default Component;
