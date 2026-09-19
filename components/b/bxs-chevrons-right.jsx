import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qp7_n3beu.css';
import '../../css/b/bxv5csb_k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="qp7_n3beu"/><path class="bxv5csb_k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bx:bxs-chevrons-right"} {...others} />);
}

export default Component;
