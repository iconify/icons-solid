import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/x/xtmuzrg2o.css';
import '../../css/m/mmtd6l_0o.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="xtmuzrg2o"/><path class="mmtd6l_0o"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:text-italic-circle-bold-duotone"} {...others} />);
}

export default Component;
