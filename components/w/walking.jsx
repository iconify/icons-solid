import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/px047eycd.css';

const viewBox = {"width":320,"height":512};
const content = `<path class="px047eycd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fa-solid:walking"} {...others} />);
}

export default Component;
