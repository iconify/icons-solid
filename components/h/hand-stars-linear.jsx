import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/g/g7e2eab1a.css';
import '../../css/u/u-2m9hbse.css';
import '../../css/v/vmccjbb6s.css';
import '../../css/a/a3scpvo1f.css';
import '../../css/e/eck4ylbag.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="g7e2eab1a"/><path class="u-2m9hbse"/><path class="vmccjbb6s"/><path class="a3scpvo1f"/><path class="eck4ylbag"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:hand-stars-linear"} {...others} />);
}

export default Component;
