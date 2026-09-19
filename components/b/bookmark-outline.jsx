import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/erpo1w27n.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="erpo1w27n"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gridicons:bookmark-outline"} {...others} />);
}

export default Component;
