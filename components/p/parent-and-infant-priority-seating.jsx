import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/z/zzpr2g3su.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="zzpr2g3su"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"guidance:parent-and-infant-priority-seating"} {...others} />);
}

export default Component;
