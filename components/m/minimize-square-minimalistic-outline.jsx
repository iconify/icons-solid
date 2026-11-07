import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/s/sb6_ytb3v.css';
import '../../css/s/sgottpb5m.css';
import '../../css/n/nbozb93jk.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="sb6_ytb3v"/><path class="sgottpb5m"/><path clip-rule="evenodd" class="nbozb93jk"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"solar:minimize-square-minimalistic-outline"} {...others} />);
}

export default Component;
