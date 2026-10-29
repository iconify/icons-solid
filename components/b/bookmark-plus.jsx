import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tl1cx0q2x.css';
import '../../css/k/krg4_wbge.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tl1cx0q2x wm-k"/><path class="krg4_wbge wm-a"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:bookmark-plus"} {...others} />);
}

export default Component;
