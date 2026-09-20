import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t0wpabctl.css';
import '../../css/n/nblgfwbys.css';
import '../../css/r/rcidtuiap.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="t0wpabctl"/><path class="nblgfwbys"/><path class="rcidtuiap"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"stash:dashboard"} {...others} />);
}

export default Component;
