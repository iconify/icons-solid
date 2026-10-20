import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/z4lpp7fcm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="z4lpp7fcm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"vadivam:piggy-bank"} {...others} />);
}

export default Component;
