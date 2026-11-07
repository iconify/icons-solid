import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/l/l6dl3e4vb.css';
import '../../css/v/vcvfl_y1l.css';
import '../../css/m/msvwnyd-x.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="l6dl3e4vb"/><path clip-rule="evenodd" class="vcvfl_y1l"/><path class="msvwnyd-x"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:banknote-2-bold-duotone"} {...others} />);
}

export default Component;
