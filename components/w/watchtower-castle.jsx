import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/gia08_wyu.css';
import '../../css/d/dds3mezff.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="gia08_wyu"/><path class="dds3mezff"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:watchtower-castle"} {...others} />);
}

export default Component;
