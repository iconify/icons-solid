import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/i/i2nwdhbfp.css';
import '../../css/o/oke3tmsms.css';
import '../../css/k/kgfy1yblx.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="i2nwdhbfp"/><path class="oke3tmsms"/><path class="kgfy1yblx"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-street-light-48-bold"} {...others} />);
}

export default Component;
