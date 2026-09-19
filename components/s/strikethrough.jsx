import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/iyuq8031z.css';

const viewBox = {"width":27,"height":24};
const content = `<path class="iyuq8031z"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:strikethrough"} {...others} />);
}

export default Component;
