import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/nakui0b-e.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="nakui0b-e"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:code-octagon-solid"} {...others} />);
}

export default Component;
