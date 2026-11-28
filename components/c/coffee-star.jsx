import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zc1y7ccgi.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zc1y7ccgi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"noviair-light:coffee-star"} {...others} />);
}

export default Component;
