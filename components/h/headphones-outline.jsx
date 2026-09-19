import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zd5lbcb6n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zd5lbcb6n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"eva:headphones-outline"} {...others} />);
}

export default Component;
