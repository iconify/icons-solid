import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lyj4s-pbm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="lyj4s-pbm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"tdesign:arrow-left-right-1"} {...others} />);
}

export default Component;
