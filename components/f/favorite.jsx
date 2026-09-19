import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/w_bvvacrn.css';

const viewBox = {"width":13,"height":24};
const content = `<path class="w_bvvacrn"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"fontisto:favorite"} {...others} />);
}

export default Component;
