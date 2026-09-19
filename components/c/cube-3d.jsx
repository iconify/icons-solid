import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/q/qm77mwb7x.css';
import '../../css/r/rjes9k1zx.css';

const viewBox = {"width":100,"height":100};
const content = `<path class="qm77mwb7x"/><path class="rjes9k1zx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"gis:cube-3d"} {...others} />);
}

export default Component;
