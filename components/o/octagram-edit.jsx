import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/we30tcvnu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="we30tcvnu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:octagram-edit"} {...others} />);
}

export default Component;
