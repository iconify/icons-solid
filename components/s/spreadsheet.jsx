import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d5i1b_2rk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="d5i1b_2rk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:spreadsheet"} {...others} />);
}

export default Component;
