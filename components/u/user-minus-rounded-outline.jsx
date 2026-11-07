import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/j6d250bwp.css';
import '../../css/r/rr_nhybqq.css';
import '../../css/j/jt-vrxbga.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="j6d250bwp"/><path class="rr_nhybqq"/><path clip-rule="evenodd" class="jt-vrxbga"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:user-minus-rounded-outline"} {...others} />);
}

export default Component;
