import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/pot4xccpv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="pot4xccpv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:cloud-rain-wind"} {...others} />);
}

export default Component;
