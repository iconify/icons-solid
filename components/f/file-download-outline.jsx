import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qp8-r7b5c.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qp8-r7b5c"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:file-download-outline"} {...others} />);
}

export default Component;
