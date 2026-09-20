import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/k2u665ban.css';
import '../../css/w/wokxgeiag.css';
import '../../css/o/o0o5s781i.css';
import '../../css/h/hnl9frb8u.css';
import '../../css/z/z0qkcfgxw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="k2u665ban"><path class="wokxgeiag"/><path class="o0o5s781i"/><path class="hnl9frb8u"/><path class="z0qkcfgxw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-sharp-color:bug"} {...others} />);
}

export default Component;
