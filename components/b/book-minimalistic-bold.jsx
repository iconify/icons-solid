import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/m/mcgmm_a3s.css';
import '../../css/v/v11avebgt.css';
import '../../css/c/c7jgn5pht.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="mcgmm_a3s"/><path class="v11avebgt"/><path class="c7jgn5pht"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:book-minimalistic-bold"} {...others} />);
}

export default Component;
