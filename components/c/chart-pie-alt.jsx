import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wbtrp5bnn.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wbtrp5bnn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:chart-pie-alt"} {...others} />);
}

export default Component;
