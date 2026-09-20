import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lmys1lirk.css';
import '../../css/l/lfy066c5u.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="lmys1lirk"/><path class="lfy066c5u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:down-right-arrow"} {...others} />);
}

export default Component;
