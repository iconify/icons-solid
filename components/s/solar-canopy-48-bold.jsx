import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/p/ps4o7zbjt.css';
import '../../css/i/ihbry8iqd.css';
import '../../css/l/l-vbyx9dn.css';
import '../../css/z/z-gc4bcqc.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="ps4o7zbjt"/><path class="ihbry8iqd"/><path class="l-vbyx9dn"/><path class="z-gc4bcqc"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:solar-canopy-48-bold"} {...others} />);
}

export default Component;
