import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/i/injgzv95t.css';
import '../../css/u/u_3inw7sj.css';
import '../../css/f/f3j0xrb5k.css';
import '../../css/i/iq7fy-b8b.css';
import '../../css/b/bed58pbiu.css';
import '../../css/s/stg0mbcoi.css';
import '../../css/d/dgazp2brn.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="ft5dv1b6b"><path class="injgzv95t"/><path class="u_3inw7sj"/><path class="f3j0xrb5k"/><path class="iq7fy-b8b"/><path class="bed58pbiu"/><path class="stg0mbcoi"/><path class="dgazp2brn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-ultimate-color:kindle-hold"} {...others} />);
}

export default Component;
