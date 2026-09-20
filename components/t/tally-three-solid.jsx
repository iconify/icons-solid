import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qgt-5pbmp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qgt-5pbmp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:tally-three-solid"} {...others} />);
}

export default Component;
