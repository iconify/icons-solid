import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/u/ue99ppw5a.css';
import '../../css/s/sach5mb4d.css';

const viewBox = {"width":72,"height":72};
const content = `<path class="ue99ppw5a"/><path class="sach5mb4d"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"openmoji:left-right-black-arrow"} {...others} />);
}

export default Component;
