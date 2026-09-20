import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zj2_uqniq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zj2_uqniq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"uil:keyhole-circle"} {...others} />);
}

export default Component;
