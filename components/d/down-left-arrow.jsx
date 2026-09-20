import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/b/bw0s58bcd.css';
import '../../css/i/imnugdlgh.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="bw0s58bcd"/><path class="imnugdlgh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:down-left-arrow"} {...others} />);
}

export default Component;
