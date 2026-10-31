import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dkv48acbf.css';
import '../../css/z/zo_eigxfe.css';
import '../../css/b/b5tlcvb9q.css';
import '../../css/v/vpnw68haq.css';
import '../../css/w/wk7jmzmpf.css';
import '../../css/r/rh9qoibkn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="dkv48acbf"><path class="zo_eigxfe"/><path class="b5tlcvb9q"/><path class="vpnw68haq wm-k"/><path class="wk7jmzmpf wm-a"/><path class="rh9qoibkn wm-deco"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-kawaii:rainbow"} {...others} />);
}

export default Component;
