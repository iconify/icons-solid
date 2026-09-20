import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/lvnkohbhv.css';
import '../../css/t/txu2pvbbi.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="lvnkohbhv"/><path class="txu2pvbbi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"selfhst:porkbun"} {...others} />);
}

export default Component;
