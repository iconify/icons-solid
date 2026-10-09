import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/f/fd8a8ccdm.css';
import '../../css/x/x2-lnebmi.css';

const viewBox = {"width":48,"height":48};
const content = `<path class="fd8a8ccdm"/><path class="x2-lnebmi"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"energy-icons:hammer-48-bold"} {...others} />);
}

export default Component;
