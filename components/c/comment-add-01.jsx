import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/ttxe6cpvg.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ttxe6cpvg"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:comment-add-01"} {...others} />);
}

export default Component;
