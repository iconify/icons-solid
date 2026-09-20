import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/x/xdkhpac3a.css';
import '../../css/l/l6dq44_au.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="xdkhpac3a"/><path class="l6dq44_au"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:dailymotion-logo"} {...others} />);
}

export default Component;
