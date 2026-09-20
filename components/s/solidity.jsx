import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kpnx4y-fi.css';
import '../../css/w/w3zqk88xs.css';
import '../../css/d/dk-crda_u.css';
import '../../css/s/s030i9bwg.css';
import '../../css/y/y2amuvuiz.css';
import '../../css/o/oatrgdbxf.css';

const viewBox = {"width":1300,"height":1300};
const content = `<path class="kpnx4y-fi"/><path class="w3zqk88xs"/><path class="dk-crda_u"/><path class="s030i9bwg"/><path class="y2amuvuiz"/><path class="oatrgdbxf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"thesvg-color:solidity"} {...others} />);
}

export default Component;
