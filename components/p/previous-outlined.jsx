import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kg6arbbbf.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kg6arbbbf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"weui:previous-outlined"} {...others} />);
}

export default Component;
