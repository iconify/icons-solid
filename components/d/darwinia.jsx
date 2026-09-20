import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/p1fzc2bsc.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="p1fzc2bsc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"token:darwinia"} {...others} />);
}

export default Component;
