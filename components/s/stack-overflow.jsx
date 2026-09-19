import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/o-jq7lsui.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="o-jq7lsui"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:stack-overflow"} {...others} />);
}

export default Component;
