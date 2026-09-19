import { Icon } from '@iconify/css-solid';
import { splitProps } from 'solid-js';
import '../../css/e/ef4civ4fj.css';
import '../../css/n/nbf3jcbto.css';
import '../../css/d/dj_zfb5pj.css';

const viewBox = {"width":24,"height":24};
const content = `<path class="ef4civ4fj"/><path clip-rule="evenodd" class="nbf3jcbto"/><path clip-rule="evenodd" class="dj_zfb5pj"/>`;

/** @param props {{width?: string; height?: string;}} */
function Component(props) {
	const [local, others] = splitProps(props, ["width","height"]);

	return (<Icon width={local.width} height={local.height} viewBox={viewBox} content={content} fallback={"bitcoin-icons:miner-filled"} {...others} />);
}

export default Component;
