import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o5ea00rjb.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o5ea00rjb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:battery-charging-three-solid"} {...others} />);
}

export default Component;
