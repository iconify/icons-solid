import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tw2jt_3pb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tw2jt_3pb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:arrow-up-bold-circle"} {...others} />);
}

export default Component;
