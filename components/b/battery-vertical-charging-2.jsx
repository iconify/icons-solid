import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ohqme2bkz.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ohqme2bkz"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tabler:battery-vertical-charging-2"} {...others} />);
}

export default Component;
