import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/n/n_51kh_lz.css';
import '../../css/i/i6wfjybuf.css';

const viewBox = {"width":24,"height":24};
const content = `<path clip-rule="evenodd" class="n_51kh_lz"/><path class="i6wfjybuf"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:body-bold-duotone"} {...others} />);
}

export default Component;
