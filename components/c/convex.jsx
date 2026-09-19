import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/w/wet55gblz.css';
import '../../css/y/yonkb7w3v.css';
import '../../css/v/v9kz_bb3f.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="wet55gblz"/><path class="yonkb7w3v"/><path class="v9kz_bb3f"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bxl:convex"} {...others} />);
}

export default Component;
