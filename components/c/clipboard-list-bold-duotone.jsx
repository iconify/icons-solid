import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mo43we00a.css';
import '../../css/i/i2_s8xbof.css';
import '../../css/e/ezq00o19c.css';
import '../../css/r/rh80u5bmb.css';
import '../../css/q/q5mff9gyp.css';
import '../../css/w/wnbgvo_yd.css';
import '../../css/p/pqks7sbue.css';
import '../../css/c/c4946-17v.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mo43we00a"/><path class="i2_s8xbof"/><path class="ezq00o19c"/><path class="rh80u5bmb"/><path class="q5mff9gyp"/><path class="wnbgvo_yd"/><path class="pqks7sbue"/><path class="c4946-17v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:clipboard-list-bold-duotone"} {...others} />);
}

export default Component;
