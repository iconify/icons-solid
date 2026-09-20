import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/y/y9tr6bcfx.css';
import '../../css/l/lbnxx9blq.css';
import '../../css/g/gm01i2b1h.css';
import '../../css/t/ty6wxsbeo.css';

const viewBox = {"width":14,"height":14};
const content = `<g class="y9tr6bcfx"><path class="lbnxx9blq"/><path class="gm01i2b1h"/><path class="ty6wxsbeo"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"streamline:ambulance"} {...others} />);
}

export default Component;
