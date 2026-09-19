import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/svetj300y.css';
import '../../css/g/gwn0owbnh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="svetj300y"/><path class="gwn0owbnh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"boxicons:user-voice"} {...others} />);
}

export default Component;
