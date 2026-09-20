import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/t_2lkqbxb.css';
import '../../css/y/ywb1w7-yw.css';
import '../../css/l/ld54_pb1a.css';
import '../../css/m/m5q4dxbpi.css';

const viewBox = {"width":50,"height":50};
const content = `<g class="t_2lkqbxb"><path class="ywb1w7-yw"/><path class="ld54_pb1a"/><path class="m5q4dxbpi"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"marketeq:warning-alt-3"} {...others} />);
}

export default Component;
