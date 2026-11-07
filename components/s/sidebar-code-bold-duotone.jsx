import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/g/g1nbikbny.css';
import '../../css/f/f_j97dnah.css';
import '../../css/d/de3eyw6ce.css';
import '../../css/x/xi5_4obqg.css';
import '../../css/f/f997n7bqa.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="g1nbikbny"/><path class="f_j97dnah"/><path class="de3eyw6ce"/><path class="xi5_4obqg"/><path class="f997n7bqa"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:sidebar-code-bold-duotone"} {...others} />);
}

export default Component;
