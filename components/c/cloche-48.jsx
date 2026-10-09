import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sow3prfxe.css';
import '../../css/c/c673ry-kp.css';
import '../../css/x/xfbl9fbkb.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="sow3prfxe"/><path class="c673ry-kp"/><path class="xfbl9fbkb"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:cloche-48"} {...others} />);
}

export default Component;
