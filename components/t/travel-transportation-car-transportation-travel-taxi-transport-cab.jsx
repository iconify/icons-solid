import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/g/gp2hsub5r.css';
import '../../css/p/pmt1unbmx.css';
import '../../css/i/i-6ka3ruo.css';
import '../../css/b/bqkj-hxcu.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="gp2hsub5r"/><circle class="pmt1unbmx"/><circle class="i-6ka3ruo"/><path class="bqkj-hxcu"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:travel-transportation-car-transportation-travel-taxi-transport-cab"} {...others} />);
}

export default Component;
