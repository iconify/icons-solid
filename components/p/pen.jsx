import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/neqmi2sea.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="neqmi2sea"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:pen"} {...others} />);
}

export default Component;
