import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/k/kflf7crkg.css';
import '../../css/a/aam5d_bgq.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="kflf7crkg"/><path clip-rule="evenodd" class="aam5d_bgq"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:call-medicine-rounded-bold"} {...others} />);
}

export default Component;
