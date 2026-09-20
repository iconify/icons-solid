import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/f_f5fmb5w.css';
import '../../css/d/dgp7bubto.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="f_f5fmb5w"/><path class="dgp7bubto"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"pixel:window-restore-solid"} {...others} />);
}

export default Component;
