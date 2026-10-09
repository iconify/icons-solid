import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f6y4q0buk.css';
import '../../css/y/ykgt55trn.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="f6y4q0buk"/><path class="ykgt55trn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:rolling-pin-48-bold"} {...others} />);
}

export default Component;
