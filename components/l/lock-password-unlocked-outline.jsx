import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i7aemk5fe.css';
import '../../css/x/x41xvfi0c.css';
import '../../css/y/y97ssxb3n.css';
import '../../css/m/m2h8cktnh.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="i7aemk5fe"/><path class="x41xvfi0c"/><path class="y97ssxb3n"/><path clip-rule="evenodd" class="m2h8cktnh"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:lock-password-unlocked-outline"} {...others} />);
}

export default Component;
