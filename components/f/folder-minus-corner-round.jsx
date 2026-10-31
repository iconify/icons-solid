import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p6knm2bxl.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p6knm2bxl"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"coolicons:folder-minus-corner-round"} {...others} />);
}

export default Component;
