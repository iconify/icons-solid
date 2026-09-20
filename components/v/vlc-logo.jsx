import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/to-5kdesz.css';
import '../../css/r/rt2vuj_ro.css';
import '../../css/r/ragbhibbw.css';
import '../../css/n/nre7-0bvg.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="to-5kdesz"><path class="rt2vuj_ro"/><path class="ragbhibbw"/><path class="nre7-0bvg"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-logos:vlc-logo"} {...others} />);
}

export default Component;
