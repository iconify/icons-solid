import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/ifg8xbtgj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ifg8xbtgj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:clipboard-list"} {...others} />);
}

export default Component;
