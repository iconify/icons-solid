import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qy3r-4b1v.css';
import '../../css/b/bjtu_p5xz.css';
import '../../css/v/vv7g44h6d.css';
import '../../css/e/e_x-e_2ba.css';

const viewBox = {"width":1024,"height":1024};
const content = `<path class="qy3r-4b1v"/><path class="bjtu_p5xz"/><path class="vv7g44h6d"/><path class="e_x-e_2ba"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"iconito:onion"} {...others} />);
}

export default Component;
