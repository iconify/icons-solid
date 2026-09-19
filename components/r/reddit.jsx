import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n-ojc6gmg.css';
import '../../css/l/ldfs6kdmd.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n-ojc6gmg"/><path class="ldfs6kdmd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:reddit"} {...others} />);
}

export default Component;
