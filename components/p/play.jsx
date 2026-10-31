import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sv7ay2bxn.css';
import '../../css/r/rm-j65frv.css';
import '../../css/t/txfh-5blw.css';
import '../../css/t/tdfzwrb2o.css';
import '../../css/v/vzoejcc3a.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="sv7ay2bxn"><path class="rm-j65frv wm-shadow"/><path class="txfh-5blw wm-shadow"/><path class="tdfzwrb2o"/><path class="vzoejcc3a"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-brutal:play"} {...others} />);
}

export default Component;
