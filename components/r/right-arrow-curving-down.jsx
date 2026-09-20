import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/swkylxb0c.css';
import '../../css/x/xnoj2lhrt.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="swkylxb0c"/><path class="xnoj2lhrt"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:right-arrow-curving-down"} {...others} />);
}

export default Component;
