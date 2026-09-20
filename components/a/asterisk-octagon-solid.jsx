import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fw6t0ac1g.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fw6t0ac1g"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:asterisk-octagon-solid"} {...others} />);
}

export default Component;
