import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rc-koab6b.css';
import '../../css/m/m0g6xbd6f.css';
import '../../css/r/r7my--sgm.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rc-koab6b"/><path class="m0g6xbd6f"/><path class="r7my--sgm"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:dumbbell"} {...others} />);
}

export default Component;
