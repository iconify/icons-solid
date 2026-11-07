import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/r/rjfa6f3hs.css';
import '../../css/z/z_r9jpb7p.css';
import '../../css/a/a3scpvo1f.css';
import '../../css/e/eck4ylbag.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="rjfa6f3hs"/><path class="z_r9jpb7p"/><path class="a3scpvo1f"/><path class="eck4ylbag"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:hand-pills-linear"} {...others} />);
}

export default Component;
