import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ulx72ubuy.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ulx72ubuy"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:microsoft-excel"} {...others} />);
}

export default Component;
