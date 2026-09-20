import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/ohw4jv0bd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ohw4jv0bd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:cupboard"} {...others} />);
}

export default Component;
