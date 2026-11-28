import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n-fzfcpkq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="n-fzfcpkq primary"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconaut:list-music-duotone"} {...others} />);
}

export default Component;
