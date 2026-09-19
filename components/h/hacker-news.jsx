import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/ww38k_b5y.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ww38k_b5y"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:hacker-news"} {...others} />);
}

export default Component;
