import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ee10w_8jp.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ee10w_8jp"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:number-nine-plus-circle"} {...others} />);
}

export default Component;
