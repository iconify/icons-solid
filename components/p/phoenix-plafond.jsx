import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dyjq7qbyo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dyjq7qbyo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cbi:phoenix-plafond"} {...others} />);
}

export default Component;
