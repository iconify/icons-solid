import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xv42s-bwo.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xv42s-bwo"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconamoon:attachment-duotone"} {...others} />);
}

export default Component;
