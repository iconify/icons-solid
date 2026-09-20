import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x5g2j3bct.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="x5g2j3bct"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:file-table-box-outline"} {...others} />);
}

export default Component;
