import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hvn9s80eo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="hvn9s80eo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"weui:report-problem-outlined"} {...others} />);
}

export default Component;
