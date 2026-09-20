import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zq2i94jsu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zq2i94jsu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"mdi:wheel-barrow"} {...others} />);
}

export default Component;
