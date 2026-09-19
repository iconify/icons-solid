import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/d/dxrp5pbhu.css';
import '../../css/z/zwkxfwbcx.css';
import '../../css/j/jgecn8b8w.css';
import '../../css/s/si615ccmd.css';

const viewBox = {"width":48,"height":48};
const content = `<g class="dxrp5pbhu"><path class="zwkxfwbcx"/><path class="jgecn8b8w"/></g><path class="si615ccmd"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"flat-color-icons:rotate-camera"} {...others} />);
}

export default Component;
