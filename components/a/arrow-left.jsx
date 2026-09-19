import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/a/av-0zqb-m.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="av-0zqb-m"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fe:arrow-left"} {...others} />);
}

export default Component;
