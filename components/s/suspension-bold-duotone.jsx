import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/o/oxdwvpbri.css';
import '../../css/u/ucym07b5n.css';
import '../../css/h/hpp6ujt5x.css';
import '../../css/c/cfu0w31nz.css';
import '../../css/k/kuukv2b8k.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="oxdwvpbri"/><path class="ucym07b5n"/><path class="hpp6ujt5x"/><path class="cfu0w31nz"/><path class="kuukv2b8k"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:suspension-bold-duotone"} {...others} />);
}

export default Component;
