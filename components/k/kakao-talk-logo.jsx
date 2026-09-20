import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/r/rfl0hybpn.css';
import '../../css/t/t2cscwrbb.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="rfl0hybpn"/><path class="t2cscwrbb"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:kakao-talk-logo"} {...others} />);
}

export default Component;
