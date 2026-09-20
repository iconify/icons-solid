import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/c/cqq1a1bhh.css';
import '../../css/x/xkmtl8oby.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="cqq1a1bhh"/><path class="xkmtl8oby"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline-flex:map-location"} {...others} />);
}

export default Component;
