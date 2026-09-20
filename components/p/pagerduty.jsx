import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/do3f0-lqt.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="do3f0-lqt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uim:pagerduty"} {...others} />);
}

export default Component;
