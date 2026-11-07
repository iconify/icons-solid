import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/x67ixnt2n.css';
import '../../css/w/wooxy4b5z.css';
import '../../css/r/rzqwosqwh.css';
import '../../css/h/hiedmrbxb.css';
import '../../css/v/vczaa_c9x.css';
import '../../css/u/ugqn7gbce.css';
import '../../css/c/ctk5tipww.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="x67ixnt2n"/><path class="wooxy4b5z"/><path class="rzqwosqwh"/><path class="hiedmrbxb"/><path class="vczaa_c9x"/><path class="ugqn7gbce"/><path class="ctk5tipww"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:shock-absorber-bold"} {...others} />);
}

export default Component;
