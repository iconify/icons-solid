import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/c-yckdk2x.css';
import '../../css/k/kdm4lcb3e.css';
import '../../css/s/seqcy-7oq.css';
import '../../css/l/lri0zsbsm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="c-yckdk2x"/><path class="kdm4lcb3e"/><path class="seqcy-7oq"/><path class="lri0zsbsm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:wi-fi-bold"} {...others} />);
}

export default Component;
