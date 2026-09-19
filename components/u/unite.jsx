import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fz8difb4r.css';
import '../../css/q/qne2hd_ir.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="fz8difb4r"/><path class="qne2hd_ir"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:unite"} {...others} />);
}

export default Component;
