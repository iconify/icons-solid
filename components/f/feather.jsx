import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/d2kvgvbvc.css';
import '../../css/v/vcvvvdbbn.css';
import '../../css/c/cn2a-mbod.css';
import '../../css/o/ontmpl02u.css';
import '../../css/s/sglwugb9f.css';
import '../../css/r/r-1aatwdw.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="d2kvgvbvc"><path class="vcvvvdbbn wm-shadow"/><path class="cn2a-mbod"/><path class="ontmpl02u"/><path class="sglwugb9f"/><path class="r-1aatwdw"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"withicons-retro:feather"} {...others} />);
}

export default Component;
