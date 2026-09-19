import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rxkvfd2yc.css';

const viewBox = {"width":512,"height":512};
const content = `<path class="rxkvfd2yc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"cil:user-unfollow"} {...others} />);
}

export default Component;
