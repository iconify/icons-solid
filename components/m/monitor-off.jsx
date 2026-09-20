import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tzlg-u0et.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tzlg-u0et"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:monitor-off"} {...others} />);
}

export default Component;
