import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/agtflua3y.css';
import '../../css/y/yahv79bgw.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="agtflua3y"/><path class="yahv79bgw"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:task"} {...others} />);
}

export default Component;
