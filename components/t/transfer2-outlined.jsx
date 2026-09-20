import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/ma3conxig.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ma3conxig"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"weui:transfer2-outlined"} {...others} />);
}

export default Component;
