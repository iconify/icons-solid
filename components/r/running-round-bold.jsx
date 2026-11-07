import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cp8lrpbea.css';
import '../../css/i/isx_b_b0w.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cp8lrpbea"/><path clip-rule="evenodd" class="isx_b_b0w"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:running-round-bold"} {...others} />);
}

export default Component;
