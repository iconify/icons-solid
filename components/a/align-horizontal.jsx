import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/onlzeu7-b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="onlzeu7-b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mynaui:align-horizontal"} {...others} />);
}

export default Component;
