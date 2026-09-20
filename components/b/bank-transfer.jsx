import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/ddx_pdqze.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ddx_pdqze"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:bank-transfer"} {...others} />);
}

export default Component;
