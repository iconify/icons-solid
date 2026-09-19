import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/j/jx0p4fbya.css';
import '../../css/y/y9ra9v_nc.css';
import '../../css/s/shu3xdl9q.css';
import '../../css/m/mt1kbjbkl.css';

const viewBox = {"width":24,"height":24};
const content = `<g class="jx0p4fbya"><path class="y9ra9v_nc"/><circle class="shu3xdl9q"/><path class="mt1kbjbkl"/></g>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"hugeicons:sphere"} {...others} />);
}

export default Component;
