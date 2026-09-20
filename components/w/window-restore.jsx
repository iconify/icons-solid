import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dgp7bubto.css';
import '../../css/k/kbad1107b.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="dgp7bubto"/><path class="kbad1107b"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:window-restore"} {...others} />);
}

export default Component;
