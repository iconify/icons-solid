import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hwqp_tb_b.css';

const viewBox = {"width":16,"height":16};
const content = `<path class="hwqp_tb_b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"formkit:apple"} {...others} />);
}

export default Component;
