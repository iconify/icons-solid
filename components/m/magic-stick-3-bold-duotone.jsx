import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sg7argb-b.css';
import '../../css/g/gfaea2w_j.css';
import '../../css/i/imc05mbed.css';
import '../../css/a/a-4v7vhmv.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sg7argb-b"/><path class="gfaea2w_j"/><path class="imc05mbed"/><path class="a-4v7vhmv"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:magic-stick-3-bold-duotone"} {...others} />);
}

export default Component;
