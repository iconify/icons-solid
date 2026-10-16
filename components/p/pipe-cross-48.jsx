import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/h/hpv7mcc4r.css';
import '../../css/m/m2v5ujr4v.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="hpv7mcc4r"/><path class="m2v5ujr4v"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:pipe-cross-48"} {...others} />);
}

export default Component;
