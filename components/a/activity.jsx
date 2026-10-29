import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/r/rc7r9_r6i.css';
import '../../css/p/pzwkoob0i.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="rc7r9_r6i"/><path class="pzwkoob0i"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-bauhaus:activity"} {...others} />);
}

export default Component;
