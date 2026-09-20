import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/aqieu0njm.css';

const viewBox = {"width":24,"height":24,"left":-1.5,"top":-1.5};
const content = `<path class="aqieu0njm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"jam:bandage"} {...others} />);
}

export default Component;
