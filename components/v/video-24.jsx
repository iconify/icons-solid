import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/c/cle0u0bwz.css';
import '../../css/h/hb_oaob_u.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="cle0u0bwz"/><path class="hb_oaob_u"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"octicon:video-24"} {...others} />);
}

export default Component;
