import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/krnc8kyjp.css';
import '../../css/f/f0fcqmbzu.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="krnc8kyjp"/><path class="f0fcqmbzu"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:comment-dots"} {...others} />);
}

export default Component;
