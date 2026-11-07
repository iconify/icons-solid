import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kdob9slbu.css';
import '../../css/w/womkpu5er.css';
import '../../css/d/dhs0g5bcg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kdob9slbu"/><path class="womkpu5er"/><path class="dhs0g5bcg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:quit-pip-bold-duotone"} {...others} />);
}

export default Component;
