import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/clk6xjb_o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="clk6xjb_o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:t-shirt-linear"} {...others} />);
}

export default Component;
