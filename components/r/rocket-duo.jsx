import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/ft5dv1b6b.css';
import '../../css/y/ywrrljb0f.css';
import '../../css/f/fqx9w60ay.css';
import '../../css/a/a53m6sb5f.css';
import '../../css/s/sclvgt7mn.css';

const viewBox = {"width":80,"height":80};
const content = `<g class="ft5dv1b6b"><path class="ywrrljb0f"/><path class="fqx9w60ay"/><path class="a53m6sb5f"/><path class="sclvgt7mn"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"glyphs:rocket-duo"} {...others} />);
}

export default Component;
