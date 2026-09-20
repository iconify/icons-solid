import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w1kvfb.css';
import '../../css/s/so-from-22.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="w1kvfb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"line-md:water"} {...others} />);
}

export default Component;
