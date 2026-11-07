import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/t/tsikgs9ig.css';
import '../../css/s/s12m7vb1w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="tsikgs9ig"/><path clip-rule="evenodd" class="s12m7vb1w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:layers-minimalistic-bold"} {...others} />);
}

export default Component;
